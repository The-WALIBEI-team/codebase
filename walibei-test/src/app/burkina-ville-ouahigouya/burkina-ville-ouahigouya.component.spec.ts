import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleOuahigouyaComponent } from './burkina-ville-ouahigouya.component';

describe('BurkinaVilleOuahigouyaComponent', () => {
  let component: BurkinaVilleOuahigouyaComponent;
  let fixture: ComponentFixture<BurkinaVilleOuahigouyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleOuahigouyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleOuahigouyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
