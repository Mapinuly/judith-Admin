import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeamDetailDialogComponent } from './new-team-detail-dialog.component';

describe('NewTeamDetailDialogComponent', () => {
  let component: NewTeamDetailDialogComponent;
  let fixture: ComponentFixture<NewTeamDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTeamDetailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTeamDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
