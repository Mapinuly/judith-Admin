import { DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-new',
  templateUrl: './dialog-new.component.html',
  styleUrls: ['./dialog-new.component.scss']
})
export class DialogNewComponent implements OnInit {
  isLoading: boolean = false;
  newRowForm:FormGroup
  tittleTouched=false
  descriptionTouched=false
  linkTouch=false
  tagTouch=false
 constructor(private frmBuilder:FormBuilder
   , private cardData:DataService,
    private _dialogRef:DialogRef<DialogNewComponent>,
     private snackBar:MatSnackBar, 
     private cdr: ChangeDetectorRef,
  @Inject(MAT_DIALOG_DATA) public data:any)
  {
    this.newRowForm=this.frmBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    // link: ['', [Validators.required, Validators.pattern(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)]],
    link: [''],
    linkText:['',[Validators.required, Validators.maxLength(100)]],
    tag:['',[Validators.required, Validators.maxLength(100)]],
  })
 }
 ngOnInit(): void {
  
 }
  onSubmit(){
   if(this.newRowForm.valid){
    this.isLoading = true;
    this.cardData.addCard(this.newRowForm.value).subscribe({
       next: (val:any)=>{
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        this.data.getCardsData()
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
