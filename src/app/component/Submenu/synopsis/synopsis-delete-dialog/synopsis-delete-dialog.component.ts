
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-synopsis-delete-dialog',
  templateUrl: './synopsis-delete-dialog.component.html',
  styleUrls: ['./synopsis-delete-dialog.component.scss']
})

export class SynopsisDeleteDialogComponent {

  constructor(private dialogRef: MatDialogRef<SynopsisDeleteDialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any){}
  confirmDelete(){
    console.log("dleted")
  }

}
