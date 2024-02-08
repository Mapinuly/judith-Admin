import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar'
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-delete-row-dialog',
  templateUrl: './delete-row-dialog.component.html',
  styleUrls: ['./delete-row-dialog.component.scss']
})
export class DeleteRowDialogComponent  implements OnInit {
  isLoading: boolean = false;
  // constructor(@Inject(MAT_DIALOG_DATA) public data:any){}
constructor(public dialogRef: MatDialogRef<DeleteRowDialogComponent>, public snackbar:MatSnackBar, private cardData:DataService, @Inject(MAT_DIALOG_DATA) public data:any){}
confirmDelete(){
  this.isLoading=true
  setTimeout(() => {
    this.isLoading = false; // Hide the loader
  }, 2000);
  this.dialogRef.close(true)
  this.showDeleteSuccessSnackbar()
}
ngOnInit(): void {
   console.log(this.data, "hdshfgebfuwabcwnvtbju5gvu")
}
showDeleteSuccessSnackbar() {
  this.snackbar.open('Deleted successfully!', 'Close', {
    duration: 3000, 
  });
}
}
