import { Component , Inject, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WeAreHereComponent } from '../../Submenu/we-are-here/we-are-here.component';

@Component({
  selector: 'app-new-we-are-here-dialog',
  templateUrl: './new-we-are-here-dialog.component.html',
  styleUrls: ['./new-we-are-here-dialog.component.scss']
})
export class NewWeAreHereDialogComponent {
  newWeAreHereForm: FormGroup
  titleTouched=false
  descriptionTouched=false
  constructor(private frmBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private _dialogRef:DialogRef<WeAreHereComponent>,
    private cardData:DataService
    ){
      this.newWeAreHereForm=this.frmBuilder.group({
        title: ['', [Validators.required, Validators.maxLength(100)]],
        description: ['', [Validators.required, Validators.maxLength(500)]],
      })
    }

    onTitleTouched(){
      this.titleTouched=true
     }
     onDescriptionTouched(){
      this.descriptionTouched=true
     }
     onSubmit(){
      if(this.newWeAreHereForm.valid){
        this.cardData.addWeAreHeredata(this.newWeAreHereForm.value).subscribe({
          next:(val:any)=>{
            this.data.getCardsData()
            this._dialogRef.close()
          }
        })
        console.log("form is valid", this.newWeAreHereForm.value)
      }
     }

}
