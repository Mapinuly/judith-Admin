import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWeAreHereDialogComponent } from './edit-we-are-here-dialog.component';

describe('EditWeAreHereDialogComponent', () => {
  let component: EditWeAreHereDialogComponent;
  let fixture: ComponentFixture<EditWeAreHereDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWeAreHereDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWeAreHereDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
