import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NewWeAreHereDialogComponent } from '../../WeAreHereDialog/new-we-are-here-dialog/new-we-are-here-dialog.component';
import { EditWeAreHereDialogComponent } from '../../WeAreHereDialog/edit-we-are-here-dialog/edit-we-are-here-dialog.component';
import { DeleteWeAreHereDialogComponent } from '../../WeAreHereDialog/delete-we-are-here-dialog/delete-we-are-here-dialog.component';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';



export interface weData {
  title: string;
  position: number;
  description:string
  actions:string
}

@Component({
  selector: 'app-we-are-here',
  templateUrl: './we-are-here.component.html',
  styleUrls: ['./we-are-here.component.scss']
})
export class WeAreHereComponent implements OnInit {
  constructor(private matDialog:MatDialog,private dataService:DataService,private snackBar:MatSnackBar){

  }
  ngOnInit(): void {
    this.getWeHere()
  }
  displayedColumns: string[] = ['position' , 'title','description', 'actions'];
  
  dataSource:any = [];

  openNewWeAreHereDialog(){
    this.matDialog.open(NewWeAreHereDialogComponent,{
      width:'700px',
      height:'419px',
      data:{getCardsData: ()=>{this.getWeHere()} }
    })
  }
  getWeHere(){
    this.dataService.getWeAreHereData().subscribe((res:any)=>{
      if(res){        
        this.dataSource = res;
      }
    })
  }
  editWeAreHereDialog(rowData:any){
    this.matDialog.open(EditWeAreHereDialogComponent,{
      data:rowData,
      width:'700px',
      height:'400px',
    })
  }
  deleteWeAreHereDialog(data:any){
    this.matDialog.open(DeleteWeAreHereDialogComponent,{
      width:'450px',
      data:{confirmDelete: (vl:any)=>{this.deleteWeAreHere(vl)}, id : data.id }
    })
  }

  deleteWeAreHere(data:number){
    this.dataService.deleteWeAreHere(data).subscribe({
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
