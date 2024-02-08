import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-details-dialog',
  templateUrl: './delete-details-dialog.component.html',
  styleUrls: ['./delete-details-dialog.component.scss']
})
export class DeleteDetailsDialogComponent {

constructor( private dialogRef: MatDialogRef<DeleteDetailsDialogComponent> ,@Inject(MAT_DIALOG_DATA) public data:any){}
confirmDelete(){
  console.log("dleted")
}
}
