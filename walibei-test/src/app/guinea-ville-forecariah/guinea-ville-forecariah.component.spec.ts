import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleForecariahComponent } from './guinea-ville-forecariah.component';

describe('GuineaVilleForecariahComponent', () => {
  let component: GuineaVilleForecariahComponent;
  let fixture: ComponentFixture<GuineaVilleForecariahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleForecariahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleForecariahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
