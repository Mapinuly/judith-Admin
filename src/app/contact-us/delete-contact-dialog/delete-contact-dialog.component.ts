import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-delete-contact-dialog',
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.scss']
})
export class DeleteContactDialogComponent implements OnInit {
  isLoading: boolean = false;

constructor(public dialogRef: MatDialogRef<DeleteContactDialogComponent>, 
  public snackbar:MatSnackBar, private cardData:DataService, @Inject(MAT_DIALOG_DATA) public data:any){}

confirmDelete(){
  this.isLoading=true
  setTimeout(() => {
    this.isLoading = false; // Hide the loader
  }, 2000);
  this.dialogRef.close(true)
  this.showDeleteSuccessSnackbar()
}
ngOnInit(): void {
}

showDeleteSuccessSnackbar() {
  this.snackbar.open('Deleted successfully!', 'Close', {
    duration: 3000, 
  });


}
}
