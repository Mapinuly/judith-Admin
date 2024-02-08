import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWeAreHereDialogComponent } from './delete-we-are-here-dialog.component';

describe('DeleteWeAreHereDialogComponent', () => {
  let component: DeleteWeAreHereDialogComponent;
  let fixture: ComponentFixture<DeleteWeAreHereDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteWeAreHereDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteWeAreHereDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
