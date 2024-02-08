import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-we-are-here-dialog',
  templateUrl: './edit-we-are-here-dialog.component.html',
  styleUrls: ['./edit-we-are-here-dialog.component.scss']
})
export class EditWeAreHereDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,){

  }

}
