import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewListDialogComponent } from '../view-list-dialog/view-list-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list-upcoming-event',
  templateUrl: './list-upcoming-event.component.html',
  styleUrls: ['./list-upcoming-event.component.scss']
})

export class ListUpcomingEventComponent implements OnInit{
  displayedColumns: string[] = ['id', 'firstName','lastName','jobDescription','organization','phoneNumber','actions'];
  dataSource = new MatTableDataSource<any>;
  constructor(private matDialog: MatDialog,private dataService:DataService){}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.dataService.getListData().subscribe((res:any)=>{
      if(res){
        this.dataSource=new MatTableDataSource<Object[]>(res);
        this.dataSource.paginator = this.paginator;
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
  exportToPDF() {
    const element = document.getElementById('data-table') as HTMLElement;

    html2canvas(element).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
      pdf.save('table-export.pdf');
    });
  }
  openEditUpcomingDialog(rowData:any){
   console.log('sdgcgc')
  }
  openDeleteUpcomingEventDialog(){
    console.log('sdgcgc')
  }

}
