import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-row-dialog',
  templateUrl: './edit-row-dialog.component.html',
  styleUrls: ['./edit-row-dialog.component.scss']
})
export class EditRowDialogComponent implements OnInit {
  isLoading: boolean = false;
  editForm:FormGroup
constructor (private fb: FormBuilder,
  private dialogRef: MatDialogRef<EditRowDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any , private dataService:DataService,private snackBar:MatSnackBar){
  this.editForm = this.fb.group({
    title: [data.title, Validators.required],
    description: [data.description, Validators.required],
    linkText: [data.link],
  });

  console.log(data, "datafields")
}
ngOnInit(): void {
  console.log("neweditid",this.data )
  console.log(this.data._id,"dataFields")
}

editData(data:any){
  this.isLoading=true
  this.dataService.editCard(data).subscribe({
    next: (val:any)=>{
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
      this.dialogRef.close()
      this.showSuccessSnackbar()
    },
  })
}
showSuccessSnackbar() {
  this.snackBar.open('Updated successfully!', 'Close', {
    duration: 3000, // Display for 3 seconds
  });
}
}
