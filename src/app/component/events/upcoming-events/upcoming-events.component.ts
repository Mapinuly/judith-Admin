import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UpcomingEventDialogComponent} from '../upcoming-event-dialog/upcoming-event-dialog.component';
import { EditUpcomingEventsDialogComponent } from '../edit-upcoming-events-dialog/edit-upcoming-events-dialog.component';
import { DeleteUpcomingEventDialogComponent } from '../delete-upcoming-event-dialog/delete-upcoming-event-dialog.component';
import { DataService } from 'src/app/services/data.service';
import { AppConfig } from 'src/config';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  public BaseImg = AppConfig.baseUrl;
  displayedColumns: string[] = ['id', 'title','description','image','start_date' ,'end_date','actions'];
  dataSource=new MatTableDataSource<any>([]);
  constructor(private matDialog: MatDialog, private dataService:DataService, private snackBar:MatSnackBar){}
  

  ngOnInit(): void {
    this.getEventsData(); 
  }
  getEventsData(){
    this.dataService.getEventData().subscribe((res:any)=>{
      if(res){
        this.dataSource= new MatTableDataSource<Object[]>(res)
      }
    })
  }
  openUpcomingDialog(){
    this.matDialog.open(UpcomingEventDialogComponent,{
      width:'700px',
      height:'570px',
      data:{getTeamCardsData: ()=>{this.getEventsData()} }
    })
  }
  openEditUpcomingDialog(rowData:any){
    this.matDialog.open(EditUpcomingEventsDialogComponent,{
      width:'700px',
      height:'570px',
      data: rowData,
    })
  }

  openDeleteUpcomingEventDialog(data:any){
    this.matDialog.open(DeleteUpcomingEventDialogComponent,{
      width:'450px',
      data:{confirmDelete: (vl:any)=>{this.deleteCard(vl)}, id : data.id }
    })
  }

  deleteCard(data:number){
      this.dataService.deleteEvent(data).subscribe({
        next:(res)=>{
         const index= this.dataSource.data.findIndex(element=> element.id===data)
         console.log("datasource id", this.dataSource.data)
         const deleteValue=[...this.dataSource.data]
         deleteValue.splice(index,1)  
         this.dataSource.data=[...deleteValue]
         this.matDialog.closeAll()
         this.showSuccessSnackbar()
          console.log(index,"the index ")
        },
        error:console.log
      })
    }
    showSuccessSnackbar() {
      this.snackBar.open('Deleted successfully!', 'Close', {
        duration: 3000, // Display for 3 seconds
      });
    }


}
