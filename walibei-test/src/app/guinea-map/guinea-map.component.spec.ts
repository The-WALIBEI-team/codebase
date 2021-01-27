import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaMapComponent } from './guinea-map.component';

describe('GuineaMapComponent', () => {
  let component: GuineaMapComponent;
  let fixture: ComponentFixture<GuineaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
