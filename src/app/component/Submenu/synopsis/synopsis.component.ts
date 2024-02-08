import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditSynopsisDialogComponent } from './edit-synopsis-dialog/edit-synopsis-dialog.component';
import { SynopsisDeleteDialogComponent } from './synopsis-delete-dialog/synopsis-delete-dialog.component';
import { CreateSynopsisComponent } from './create-synopsis/create-synopsis.component';

export interface SynopsisData {
  title: string;
  position: number;
  description:string
  actions:string
}

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss']
})

export class SynopsisComponent implements OnInit  {
  constructor(private matDialog:MatDialog,private dataService:DataService,private snackBar:MatSnackBar){}

  ngOnInit(): void {
    this.getSynopsis()
  }
  displayedColumns: string[] = ['position' , 'title','description', 'actions'];
  
  dataSource:any = [];
  

  openNewWeAreHereDialog(){
    this.matDialog.open(CreateSynopsisComponent,{
      width:'700px',
      height:'419px',
      data:{getSynopsis: ()=>{this.getSynopsis()} }
    })
  }


  getSynopsis(){
    this.dataService.getSynopsiseData().subscribe((res:any)=>{
      if(res){        
        this.dataSource = res;
      }
    })
  }
  editWeAreHereDialog(rowData:any){
    this.matDialog.open(EditSynopsisDialogComponent,{
      data:rowData,
      width:'700px',
      height:'400px',
    })
  }
  
  deleteWeAreHereDialog(data:any){
    this.matDialog.open(SynopsisDeleteDialogComponent,{
      width:'450px',
      data:{confirmDelete: (vl:any)=>{this.deleteSynposis(vl)}, id : data.id }
    })
  }

  deleteSynposis(data:number){
    this.dataService.deletesynopisis(data).subscribe({
      next:(res)=>{       
        this.dataSource = []
        this.matDialog.closeAll();
        this.showSuccessSnackbar();
      },
      error:console.log
    })
  }
  showSuccessSnackbar() {
    this.snackBar.open('Deleted successfully!', 'Close', {
      duration: 3000, 
    });
  }

}
