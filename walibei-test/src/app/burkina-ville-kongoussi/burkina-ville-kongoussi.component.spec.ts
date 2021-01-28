import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleKongoussiComponent } from './burkina-ville-kongoussi.component';

describe('BurkinaVilleKongoussiComponent', () => {
  let component: BurkinaVilleKongoussiComponent;
  let fixture: ComponentFixture<BurkinaVilleKongoussiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleKongoussiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleKongoussiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
