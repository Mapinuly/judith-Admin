import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-synopsis-dialog',
  templateUrl: './edit-synopsis-dialog.component.html',
  styleUrls: ['./edit-synopsis-dialog.component.scss']
})

export class EditSynopsisDialogComponent implements OnInit {
  isLoading: boolean = false;
  editForm:FormGroup  
  dataSource:any = [];
  
constructor (private fb: FormBuilder,
  private dialogRef: MatDialogRef<EditSynopsisDialogComponent>,

  @Inject(MAT_DIALOG_DATA) public data:any , private dataService:DataService,private snackBar:MatSnackBar){
  
    this.editForm = this.fb.group({
      title: [data.title, Validators.required],
      description: [data.description, Validators.required]
  });
}

ngOnInit(): void {
  this.getSynopsis();
}

getSynopsis() {
  this.dataService.getSynopsiseData().subscribe((result: any) => {
    if(result) {
      this.dataSource = result;
    }
  })
}

editData(data:any) {
  this.isLoading = true;
  this.dataService.editSynopsiseData(data).subscribe({
    next: (val:any)=>{
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      this.dialogRef.close();
      this.showSuccessSnackbar();
    },
  })
}
showSuccessSnackbar() {
  this.snackBar.open('Updated successfully!', 'Close', {
    duration: 3000,
  });
}
}
