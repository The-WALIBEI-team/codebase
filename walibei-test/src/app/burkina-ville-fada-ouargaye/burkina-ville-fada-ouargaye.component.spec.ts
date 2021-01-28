import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleFadaOuargayeComponent } from './burkina-ville-fada-ouargaye.component';

describe('BurkinaVilleFadaOuargayeComponent', () => {
  let component: BurkinaVilleFadaOuargayeComponent;
  let fixture: ComponentFixture<BurkinaVilleFadaOuargayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleFadaOuargayeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleFadaOuargayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
