import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-upcoming-event-dialog',
  templateUrl: './delete-upcoming-event-dialog.component.html',
  styleUrls: ['./delete-upcoming-event-dialog.component.scss']
})
export class DeleteUpcomingEventDialogComponent implements OnInit  {
ngOnInit(): void {
  
}
constructor(@Inject(MAT_DIALOG_DATA) public data:any){

}
}
