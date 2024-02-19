import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-create-synopsis',
  templateUrl: './create-synopsis.component.html',
  styleUrls: ['./create-synopsis.component.scss']
})

export class CreateSynopsisComponent implements OnInit {
  isLoading: boolean = false;
  newRowForm:FormGroup
  tittleTouched=false
  descriptionTouched=false
  linkTouch=false
  tagTouch=false

 constructor(private frmBuilder:FormBuilder
   , private cardData:DataService,
    private _dialogRef:DialogRef<CreateSynopsisComponent>,
     private snackBar:MatSnackBar, 
     private cdr: ChangeDetectorRef,
  @Inject(MAT_DIALOG_DATA) public data:any)
  {
    this.newRowForm=this.frmBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
  })
 }
 ngOnInit(): void {
  
 }
  onSubmit(){
   if(this.newRowForm.valid){
    this.isLoading = true;
    this.cardData.addSynopsis(this.newRowForm.value).subscribe({
       next: (val:any)=>{
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        this.data.getSynopsis()
        this._dialogRef.close()
        this.showSuccessSnackbar()
      },
      error: (err:any)=>{
        console.error(err)
      }
    })
   }
  }
  ontittleBlur(){
    this.tittleTouched=true
  }
 
  ondesTouch(){
    this.descriptionTouched=true
  }
  onlinkTouch(){
    this.linkTouch=true
  }
  showSuccessSnackbar() {
    this.snackBar.open('Data Added successfully!', 'Close', {
      duration: 3000, // Display for 3 seconds
    });
  }

}
