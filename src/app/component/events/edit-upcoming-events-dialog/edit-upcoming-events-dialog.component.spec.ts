import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUpcomingEventsDialogComponent } from './edit-upcoming-events-dialog.component';

describe('EditUpcomingEventsDialogComponent', () => {
  let component: EditUpcomingEventsDialogComponent;
  let fixture: ComponentFixture<EditUpcomingEventsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUpcomingEventsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUpcomingEventsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
