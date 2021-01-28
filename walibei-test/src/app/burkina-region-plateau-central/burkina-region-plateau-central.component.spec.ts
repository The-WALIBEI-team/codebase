import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionPlateauCentralComponent } from './burkina-region-plateau-central.component';

describe('BurkinaRegionPlateauCentralComponent', () => {
  let component: BurkinaRegionPlateauCentralComponent;
  let fixture: ComponentFixture<BurkinaRegionPlateauCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionPlateauCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionPlateauCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
