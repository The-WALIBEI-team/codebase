import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleKoumbissiriComponent } from './burkina-ville-koumbissiri.component';

describe('BurkinaVilleKoumbissiriComponent', () => {
  let component: BurkinaVilleKoumbissiriComponent;
  let fixture: ComponentFixture<BurkinaVilleKoumbissiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleKoumbissiriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleKoumbissiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
