import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUpcomingEventComponent } from './list-upcoming-event.component';

describe('ListUpcomingEventComponent', () => {
  let component: ListUpcomingEventComponent;
  let fixture: ComponentFixture<ListUpcomingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUpcomingEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUpcomingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
