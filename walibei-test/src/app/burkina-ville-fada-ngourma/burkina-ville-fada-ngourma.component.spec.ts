import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleFadaNGourmaComponent } from './burkina-ville-fada-ngourma.component';

describe('BurkinaVilleFadaNGourmaComponent', () => {
  let component: BurkinaVilleFadaNGourmaComponent;
  let fixture: ComponentFixture<BurkinaVilleFadaNGourmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleFadaNGourmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleFadaNGourmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
