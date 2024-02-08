import { Component , Inject, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-team-detail-dialog',
  templateUrl: './new-team-detail-dialog.component.html',
  styleUrls: ['./new-team-detail-dialog.component.scss']
})
export class NewTeamDetailDialogComponent implements OnInit {
  isLoading: boolean = false;
  imageFile: File | null = null;
  newDetailForm: FormGroup
  nameTouched=false
  positionJobTouched=false
  descriptionTouched=false
  constructor(private frmBuilder:FormBuilder,
    private snackBar : MatSnackBar,
     private cardData:DataService,
      private _dialogRef:DialogRef<NewTeamDetailDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data:any
      ){
    this.newDetailForm=this.frmBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    designation: ['', [Validators.required, Validators.maxLength(500)]],
    bio: ['', [Validators.required, Validators.maxLength(500)]],
  })
 }
 onFileSelected(event: any) {
  const fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    this.imageFile = fileList[0];
  }
}

ngOnInit(): void {
  this.data.getTeamCardsData();
 }
 onNameTouched(){
  this.nameTouched=true
 }
 onPositionJobTouched(){
  this.positionJobTouched=true
 }
 onDescriptionTouched(){
  this.descriptionTouched=true

 }
 onSubmit() {
  if (this.newDetailForm.valid) {
    
    this.isLoading = true; 
    const formData = new FormData();
    formData.append('name', this.newDetailForm.get('name')!.value);
    formData.append('designation', this.newDetailForm.get('designation')!.value);
    formData.append('bio', this.newDetailForm.get('bio')!.value);

    // Append the image file
    if (this.imageFile) {
      formData.append('file', this.imageFile, this.imageFile.name);
    }

    this.cardData.addTeamCard(formData).subscribe({

      next: (val: any) => {
        // Assuming this is an Observable, you should subscribe to it
        this.data.getTeamCardsData().subscribe((data: any) => {
          // Handle the result data if necessary
        });

        
        
      },
      error: (error: any) => {
        // Handle errors, show error messages, or log them
      },
      complete: () => {
        setTimeout(() => {
          this.isLoading = false; // Hide the loader
        }, 2000); // Reset loading state to false when the API call is complete
        this._dialogRef.close();
        this.showSuccessSnackbar();
      }
    });
  }
}

showSuccessSnackbar() {
  this.snackBar.open('Added successfully!', 'Close', {
    duration: 3000, // Display for 3 seconds
  });
}

}
