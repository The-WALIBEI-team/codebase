import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleKayaComponent } from './burkina-ville-kaya.component';

describe('BurkinaVilleKayaComponent', () => {
  let component: BurkinaVilleKayaComponent;
  let fixture: ComponentFixture<BurkinaVilleKayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleKayaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleKayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
