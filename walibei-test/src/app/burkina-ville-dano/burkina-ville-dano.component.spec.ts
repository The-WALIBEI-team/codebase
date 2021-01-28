import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleDanoComponent } from './burkina-ville-dano.component';

describe('BurkinaVilleDanoComponent', () => {
  let component: BurkinaVilleDanoComponent;
  let fixture: ComponentFixture<BurkinaVilleDanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleDanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleDanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
