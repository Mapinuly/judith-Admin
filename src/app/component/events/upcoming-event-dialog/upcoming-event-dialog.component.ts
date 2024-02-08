import { DialogRef } from '@angular/cdk/dialog';
import { Component ,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-upcoming-event-dialog',
  templateUrl: './upcoming-event-dialog.component.html',
  styleUrls: ['./upcoming-event-dialog.component.scss']
})
export class UpcomingEventDialogComponent implements  OnInit {
  isLoading: boolean = false;
  eventForm:FormGroup
  tittleTouched=false
  descriptionTouched=false
  // imageTouched=false
  dateTouched=false
  imageFile: File | null = null;


constructor(private frmBuilder:FormBuilder,
  @Inject(MAT_DIALOG_DATA) public data:any,
  private snackbar:MatSnackBar,
  private eventData:DataService,
  private _dialogRef:DialogRef<UpcomingEventDialogComponent>,){

  this.eventForm=this.frmBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    // link: ['', [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)]],
    // image:['',[Validators.required, Validators.maxLength(100)]],
    start_date:['',[Validators.required]],
    end_date:['',[Validators.required]]
  })

}
onFileSelected(event: any) {
  const fileList: FileList = event.target.files;
  if (fileList.length > 0) {
    this.imageFile = fileList[0];
  }
}
onSubmit(){
  if(this.eventForm.valid){
    this.isLoading = true
    
    const formData = new FormData();
    formData.append('title', this.eventForm.get('title')!.value);
    formData.append('description', this.eventForm.get('description')!.value);
    formData.append('start_date', this.eventForm.get('start_date')!.value);
    formData.append('end_date', this.eventForm.get('end_date')!.value);
  
       if (this.imageFile) {
        formData.append('img', this.imageFile, this.imageFile.name);
      }
      this.eventData.addEventData(formData).subscribe({
        next:(val:any)=>{
          setTimeout(() => {
            this.isLoading = false; // Hide the loader
          }, 2000);
            this._dialogRef.close()
            this.showSuccessSnackbar()
            
          console.log(val,"datatatatatatatatatataatattata")
          this.data.getTeamCardsData().subscribe((data:any)=>{

          })
        },
        error:(error:any)=>{

        },
      })
  }
}
showSuccessSnackbar() {
  this.snackbar.open('Event Added successfully!', 'Close', {
    duration: 3000, // Display for 3 seconds
  });
}
  ngOnInit(): void {
    console.log(this.data.getTeamCardsData(),"newwwwwwwwwwww")
  }
  ontittleBlur(){
    this.tittleTouched=true
  }
 
  ondesTouch(){
    this.descriptionTouched=true
  }
  // onImageTouch(){
  //   this.imageTouched=true
  // }
  onDateTouch(){
    this.dateTouched=true
  }

}
