import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionCentreNordComponent } from './burkina-region-centre-nord.component';

describe('BurkinaRegionCentreNordComponent', () => {
  let component: BurkinaRegionCentreNordComponent;
  let fixture: ComponentFixture<BurkinaRegionCentreNordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionCentreNordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionCentreNordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
