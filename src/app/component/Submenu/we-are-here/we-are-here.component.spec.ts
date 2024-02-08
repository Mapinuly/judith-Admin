import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeAreHereComponent } from './we-are-here.component';

describe('WeAreHereComponent', () => {
  let component: WeAreHereComponent;
  let fixture: ComponentFixture<WeAreHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeAreHereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeAreHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
