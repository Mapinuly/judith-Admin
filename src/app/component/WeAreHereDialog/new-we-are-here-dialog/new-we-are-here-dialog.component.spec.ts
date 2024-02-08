import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWeAreHereDialogComponent } from './new-we-are-here-dialog.component';

describe('NewWeAreHereDialogComponent', () => {
  let component: NewWeAreHereDialogComponent;
  let fixture: ComponentFixture<NewWeAreHereDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWeAreHereDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWeAreHereDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
