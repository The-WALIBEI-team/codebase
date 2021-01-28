import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleHoundeComponent } from './burkina-ville-hounde.component';

describe('BurkinaVilleHoundeComponent', () => {
  let component: BurkinaVilleHoundeComponent;
  let fixture: ComponentFixture<BurkinaVilleHoundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleHoundeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleHoundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
