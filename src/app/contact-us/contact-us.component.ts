import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteContactDialogComponent } from './delete-contact-dialog/delete-contact-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'email', 'message', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dataService: DataService,
    private matDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getConactList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getConactList() {
    this.dataService.getContactList().subscribe((res: any) => {
      if (res) {
        this.dataSource = new MatTableDataSource<Object[]>(res);
        this.dataSource.paginator = this.paginator; // Set paginator after data is loaded
      }
    });
  }

  deleteContact(data: any) {
    this.matDialog.open(DeleteContactDialogComponent, {
      width: '450px',
      data: { confirmDelete: (vl: any) => this.deleteCard(vl), id: data.id }
    });
  }

  deleteCard(data: number) {
    this.dataService.deleteContact(data).subscribe({
      next: (res) => {
        const index = this.dataSource.data.findIndex((element) => element.id === data);
        const deleteValue = [...this.dataSource.data];
        deleteValue.splice(index, 1);
        this.dataSource.data = [...deleteValue];
        this.matDialog.closeAll();
        this.showSuccessSnackbar();
        console.log(index, 'the index ');
      },
      error: console.log
    });
  }

  showSuccessSnackbar() {
    this.snackBar.open('Deleted successfully!', 'Close', {
      duration: 3000 // Display for 3 seconds
    });
  }
}
