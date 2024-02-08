import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeleteDetailsDialogComponent } from '../../TeamDetails/new-team-detail-dialog/delete-details-dialog/delete-details-dialog.component';

@Component({
  selector: 'app-delete-we-are-here-dialog',
  templateUrl: './delete-we-are-here-dialog.component.html',
  styleUrls: ['./delete-we-are-here-dialog.component.scss']
})
export class DeleteWeAreHereDialogComponent {

  constructor( private dialogRef: MatDialogRef<DeleteDetailsDialogComponent> ,@Inject(MAT_DIALOG_DATA) public data:any){}
  confirmDelete(){
    console.log("dleted")
  }

}
