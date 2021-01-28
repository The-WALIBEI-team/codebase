import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionCentreEstComponent } from './burkina-region-centre-est.component';

describe('BurkinaRegionCentreEstComponent', () => {
  let component: BurkinaRegionCentreEstComponent;
  let fixture: ComponentFixture<BurkinaRegionCentreEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionCentreEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionCentreEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
