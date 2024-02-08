import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingEventDialogComponent } from './upcoming-event-dialog.component';

describe('UpcomingEventDialogComponent', () => {
  let component: UpcomingEventDialogComponent;
  let fixture: ComponentFixture<UpcomingEventDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingEventDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingEventDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
