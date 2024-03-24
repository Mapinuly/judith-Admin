import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewListDialogComponent } from '../view-list-dialog/view-list-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { jsPDF } from 'jspdf';
import { AngularCsv } from 'angular-csv-ext/dist/Angular-csv';

@Component({
  selector: 'app-list-upcoming-event',
  templateUrl: './list-upcoming-event.component.html',
  styleUrls: ['./list-upcoming-event.component.scss']
})

export class ListUpcomingEventComponent implements OnInit{

  constructor(private matDialog: MatDialog,private dataService:DataService){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'firstName','lastName','jobDescription','organization','phoneNumber','actions'];
  dataSource = new MatTableDataSource<any>;
  exportData: any = [];
  exportfields: any = [];
  exportoptions = {
    headers: [
      "First Name",
      "Last Name",
      "Job Description",
      "Organization",
      "Phone Number 1",
      "Phone Number 2",
      "Email",
    ],
  };
  fields: any;
 
  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.dataService.getListData().subscribe((res:any)=>{
      if(res){
        this.dataSource = new MatTableDataSource<Object[]>(res);
        this.dataSource.paginator = this.paginator;
        this.exportfields = [];

        res.forEach((response: any) => {
          this.fields = [];
          this.fields.firstName = response.firstname;
          this.fields.lastName = response.lastname;

          this.fields.jobDescription = response.jobdescription;
          this.fields.organization = response.organisation;
          this.fields.phoneNumber1 = response.phone1;
          this.fields.phoneNumber2 = response.phone2;
          this.fields.email = response.email;

          this.exportfields.push(this.fields);
        });
        
      }
    })
  }
  
  openViewListDialog(rowData:any){
    this.matDialog.open(ViewListDialogComponent,{
      width:'780px',
      height:'600px',
      data:rowData
    })
  }

  exportToCSV() {
    var exportdate = new Date();
    new AngularCsv(
      this.exportfields,
      "Registered-Users" + exportdate,
      this.exportoptions
    );
  }
  openEditUpcomingDialog(rowData:any){
   console.log('sdgcgc')
  }
  openDeleteUpcomingEventDialog(){
    console.log('sdgcgc')
  }

}


