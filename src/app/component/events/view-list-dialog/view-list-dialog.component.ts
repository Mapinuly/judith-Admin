import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-list-dialog',
  templateUrl: './view-list-dialog.component.html',
  styleUrls: ['./view-list-dialog.component.scss']
})
export class ViewListDialogComponent implements OnInit {
ngOnInit(): void {
  
}
constructor(@Inject(MAT_DIALOG_DATA) public data:any,){

}
}
