import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDetailsDialogComponent } from './delete-details-dialog.component';

describe('DeleteDetailsDialogComponent', () => {
  let component: DeleteDetailsDialogComponent;
  let fixture: ComponentFixture<DeleteDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
