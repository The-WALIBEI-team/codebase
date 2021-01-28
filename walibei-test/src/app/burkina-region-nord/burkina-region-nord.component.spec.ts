import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionNordComponent } from './burkina-region-nord.component';

describe('BurkinaRegionNordComponent', () => {
  let component: BurkinaRegionNordComponent;
  let fixture: ComponentFixture<BurkinaRegionNordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionNordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionNordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
