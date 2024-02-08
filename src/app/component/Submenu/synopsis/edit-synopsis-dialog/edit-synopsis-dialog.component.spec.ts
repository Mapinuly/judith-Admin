import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSynopsisDialogComponent } from './edit-synopsis-dialog.component';

describe('EditSynopsisDialogComponent', () => {
  let component: EditSynopsisDialogComponent;
  let fixture: ComponentFixture<EditSynopsisDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSynopsisDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSynopsisDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
