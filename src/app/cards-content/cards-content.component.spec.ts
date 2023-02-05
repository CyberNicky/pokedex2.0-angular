import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsContentComponent } from './cards-content.component';

describe('CardsContentComponent', () => {
  let component: CardsContentComponent;
  let fixture: ComponentFixture<CardsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
