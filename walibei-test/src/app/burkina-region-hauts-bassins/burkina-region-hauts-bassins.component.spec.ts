import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionHautsBassinsComponent } from './burkina-region-hauts-bassins.component';

describe('BurkinaRegionHautsBassinsComponent', () => {
  let component: BurkinaRegionHautsBassinsComponent;
  let fixture: ComponentFixture<BurkinaRegionHautsBassinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionHautsBassinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionHautsBassinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
