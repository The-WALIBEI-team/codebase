import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleKokologoComponent } from './burkina-ville-kokologo.component';

describe('BurkinaVilleKokologoComponent', () => {
  let component: BurkinaVilleKokologoComponent;
  let fixture: ComponentFixture<BurkinaVilleKokologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleKokologoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleKokologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
