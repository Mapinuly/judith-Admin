import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-detail-dialog',
  templateUrl: './edit-detail-dialog.component.html',
  styleUrls: ['./edit-detail-dialog.component.scss']
})
export class EditDetailDialogComponent implements OnInit {
  isLoading: boolean = false;
  imageFile: File | null = null;
  editForm:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
   private editTeamCard:DataService,
   private fb: FormBuilder,
   private snackBar:MatSnackBar,
   private dialogRef: MatDialogRef<EditDetailDialogComponent>,){
      this.editForm = this.fb.group({
      name: [data.name, Validators.required],
      designation: [data.designation, Validators.required],
      bio: [data.bio,Validators.required],
    });
  }
  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.imageFile = fileList[0];
    }
  }
  ngOnInit(): void {
    console.log(this.data._id,"teamedit")
  }
  editTeamData(data: any) {
    this.isLoading = true;

    const formData: FormData = new FormData();

    formData.append('name', this.editForm.get('name')?.value);
    formData.append('designation', this.editForm.get('designation')?.value);
    formData.append('bio', this.editForm.get('bio')?.value);

    if (this.imageFile) {
      formData.append('image', this.imageFile, this.imageFile.name);
    }
    this.editTeamCard.editTeamCard(formData).subscribe({
      next: (val: any) => {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        this.dialogRef.close();
        this.showSuccessSnackbar();
      },
      error: (error: any) => {
        console.error('Error occurred while editing team data:', error);
 
        this.isLoading = false;
      }
    });
  }
  // editTeamData(data:any){
  //   this.isLoading=true
  //   this.editTeamCard.editTeamCard(data).subscribe({
  //     next: (val:any)=>{
  //       setTimeout(() => {
  //         this.isLoading = false;
  //       }, 2000);
  //       this.dialogRef.close()
  //       this.showSuccessSnackbar()
  //     },
  //   })
  // }
  showSuccessSnackbar() {
    this.snackBar.open('Data Edited successfully!', 'Close', {
      duration: 3000,
    });
  }
}
