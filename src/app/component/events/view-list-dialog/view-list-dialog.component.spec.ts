import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListDialogComponent } from './view-list-dialog.component';

describe('ViewListDialogComponent', () => {
  let component: ViewListDialogComponent;
  let fixture: ComponentFixture<ViewListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
