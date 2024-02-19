import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';
import { NewTeamDetailDialogComponent } from '../../TeamDetails/new-team-detail-dialog/new-team-detail-dialog.component';
import { EditDetailDialogComponent } from '../../TeamDetails/new-team-detail-dialog/edit-detail-dialog/edit-detail-dialog.component';
import { DeleteDetailsDialogComponent } from '../../TeamDetails/new-team-detail-dialog/delete-details-dialog/delete-details-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppConfig } from 'src/config';
import { MatPaginator } from '@angular/material/paginator';

export interface TeamData {
  name: string;
  position: number;
  position_job:string
  description: string;
  actions:string
}
const TEAM_DATA: TeamData[] = [
  {position: 1, name: 'Avi Revivo' , position_job:'CTO & Founder', description: 'AVI is the CTO of GoGis.With rich and varied background of more than 10 years' , actions:''},
  {position: 2, name: 'Judith Yehudit Yogev' , position_job:'Customer Account Executive', description: 'Judith work closely with our clients to understand their needs' , actions:''},
 
];


@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  public BaseImg = AppConfig.baseImgUrl;
  displayedColumns: string[] = ['position' , 'name',  'designation', 'bio', 'img', 'actions'];
  dataSource = new MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private matDialog:MatDialog, private dataService:DataService,private snackBar:MatSnackBar){}
  ngOnInit(): void {
   this.getTeamCards()
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getTeamCards(){
    this.dataService.getTeamCards().subscribe((response: any) => {
      console.log(response)
        if (response) {
          this.dataSource= new MatTableDataSource<Object[]>(response);
          this.dataSource.paginator = this.paginator; 
        }
    })
  }
  openNewDetailDialog(){
    this.matDialog.open(NewTeamDetailDialogComponent,{
      width:'700px',
      height:'491px',
      data:{getTeamCardsData: ()=>{this.getTeamCards()} }
    })
  }
  openEditDetailDialog(rowData:any){
    console.log("rowData" , rowData)
    this.matDialog.open(EditDetailDialogComponent,{
      data:rowData,
      width:'700px',
      height:'491px'
    })
      }
      openDeleteDetailDialog(data:any){
        this.matDialog.open(DeleteDetailsDialogComponent,{
          width:'450px',
          data:{confirmDelete: (vl:any)=>{this.deleteCard(vl)}, id : data.id }
        })
      }
      deleteCard(data:number){
          this.dataService.deleteTeamCard(data).subscribe({
            next:(res)=>{
             const index= this.dataSource.data.findIndex(element=> element.id===data)
            //  this.dataSource.data.splice(index,1)
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
