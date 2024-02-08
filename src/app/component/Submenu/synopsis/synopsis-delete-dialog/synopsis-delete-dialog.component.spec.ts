import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisDeleteDialogComponent } from './synopsis-delete-dialog.component';

describe('SynopsisDeleteDialogComponent', () => {
  let component: SynopsisDeleteDialogComponent;
  let fixture: ComponentFixture<SynopsisDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynopsisDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynopsisDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
