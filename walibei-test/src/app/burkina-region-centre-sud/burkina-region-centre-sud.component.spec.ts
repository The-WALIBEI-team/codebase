import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionCentreSudComponent } from './burkina-region-centre-sud.component';

describe('BurkinaRegionCentreSudComponent', () => {
  let component: BurkinaRegionCentreSudComponent;
  let fixture: ComponentFixture<BurkinaRegionCentreSudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionCentreSudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionCentreSudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
