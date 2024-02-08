import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-upcoming-events-dialog',
  templateUrl: './edit-upcoming-events-dialog.component.html',
  styleUrls: ['./edit-upcoming-events-dialog.component.scss']
})

export class EditUpcomingEventsDialogComponent implements OnInit {
  isLoading: boolean = false;
  imageFile: File | null = null;
  editdata: any;
  editEventForm: FormGroup
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private frmBuilder:FormBuilder,
              private dialogRef: MatDialogRef<EditUpcomingEventsDialogComponent>,
              private snackbar: MatSnackBar, 
              private dataService: DataService) { 

                this.editEventForm = this.frmBuilder.group({
                  title: ['', [Validators.required, Validators.maxLength(100)]],
                  description: ['', [Validators.required, Validators.maxLength(500)]],
                  start_date:['',[Validators.required]],
                  end_date:['',[Validators.required]]
                })
              }



  ngOnInit(): void {
    this.editEventForm = this.frmBuilder.group({
      title: this.data.title,
      description: this.data.description,
      start_date: this.data.start_date,
      end_date: this.data.end_date,
      img: this.data.img
    })

  }
  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.imageFile = fileList[0];
    }
  }
  
  editData(data: any) {
    const formData = new FormData();
    formData.append('title', this.editEventForm.get('title')!.value);
    formData.append('description', this.editEventForm.get('description')!.value);
    formData.append('start_date', this.editEventForm.get('start_date')!.value);
    formData.append('end_date', this.editEventForm.get('end_date')!.value);

   if (this.imageFile) {
        formData.append('img', this.imageFile, this.imageFile.name);
    }else{
      formData.append('img', this.editEventForm.get('img')!.value);
    }

    this.isLoading = true
    this.dataService.editEventData(formData).subscribe({
      next: (val: any) => {
        setTimeout(() => {
          this.isLoading = false; // Hide the loader
        }, 2000);
        this.dialogRef.close()
        this.showSuccessSnackbar();
      }
    })

  }

  cancleButon(){
    this.dialogRef.close();
  }
  showSuccessSnackbar() {
    this.snackbar.open('Updated successfully!', 'Close', {
      duration: 3000, // Display for 3 seconds
    });
  }
}
