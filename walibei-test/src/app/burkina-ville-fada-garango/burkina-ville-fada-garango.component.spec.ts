import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleFadaGarangoComponent } from './burkina-ville-fada-garango.component';

describe('BurkinaVilleFadaGarangoComponent', () => {
  let component: BurkinaVilleFadaGarangoComponent;
  let fixture: ComponentFixture<BurkinaVilleFadaGarangoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleFadaGarangoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleFadaGarangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
