import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUpcomingEventDialogComponent } from './delete-upcoming-event-dialog.component';

describe('DeleteUpcomingEventDialogComponent', () => {
  let component: DeleteUpcomingEventDialogComponent;
  let fixture: ComponentFixture<DeleteUpcomingEventDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUpcomingEventDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUpcomingEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
