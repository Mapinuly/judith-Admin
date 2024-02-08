import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSynopsisComponent } from './create-synopsis.component';

describe('CreateSynopsisComponent', () => {
  let component: CreateSynopsisComponent;
  let fixture: ComponentFixture<CreateSynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSynopsisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
