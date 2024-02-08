import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { DialogNewComponent } from '../dialog-new/dialog-new.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditRowDialogComponent } from '../edit-row-dialog/edit-row-dialog.component';
import { DeleteRowDialogComponent } from '../delete-row-dialog/delete-row-dialog.component';
import { DataService } from 'src/app/services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'linkText', 'tag', 'actions'];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private matDialog: MatDialog, private dataService: DataService, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.getCards()

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getCards() {
    this.dataService.getCardsData().subscribe((res: any) => {
      if (res) {
        this.dataSource = new MatTableDataSource<Object[]>(res);
        this.dataSource.paginator = this.paginator; 
      }
    })
  }
  openDialog() {
    this.matDialog.open(DialogNewComponent, {
      width: '700px',
      height: '453px',
      data: { getCardsData: () => { this.getCards() } }
    })
  }
  openEditDialog(rowData: any) {
    this.matDialog.open(EditRowDialogComponent, {
      data: rowData,
      width: '700px',
      height: '510px',
    })
  }
  openDeleteConfirmDialog(data: any) {
    this.matDialog.open(DeleteRowDialogComponent, {
      width: '450px',
      data: { confirmDelete: (vl: any) => { this.deleteCard(vl) }, id: data.id }
    })
  }
  deleteCard(data: number) {
    this.dataService.deleteCard(data).subscribe({
      next: (res) => {
        const index = this.dataSource.data.findIndex(element => element.id === data)
        const deleteValue = [...this.dataSource.data]
        deleteValue.splice(index, 1)
        this.dataSource.data = [...deleteValue]
        this.matDialog.closeAll()
        this.showSuccessSnackbar()
        console.log(index, "the index ")
      },
      error: console.log
    })
  }
  showSuccessSnackbar() {
    this.snackBar.open('Deleted successfully!', 'Close', {
      duration: 3000, // Display for 3 seconds
    });
  }
}

