import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleReoComponent } from './burkina-ville-reo.component';

describe('BurkinaVilleReoComponent', () => {
  let component: BurkinaVilleReoComponent;
  let fixture: ComponentFixture<BurkinaVilleReoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleReoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleReoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
