import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVillePamaComponent } from './burkina-ville-pama.component';

describe('BurkinaVillePamaComponent', () => {
  let component: BurkinaVillePamaComponent;
  let fixture: ComponentFixture<BurkinaVillePamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVillePamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVillePamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
