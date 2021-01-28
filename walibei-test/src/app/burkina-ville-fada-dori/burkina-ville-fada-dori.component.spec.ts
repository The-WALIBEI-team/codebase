import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleFadaDoriComponent } from './burkina-ville-fada-dori.component';

describe('BurkinaVilleFadaDoriComponent', () => {
  let component: BurkinaVilleFadaDoriComponent;
  let fixture: ComponentFixture<BurkinaVilleFadaDoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleFadaDoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleFadaDoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
