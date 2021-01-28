import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionEstComponent } from './burkina-region-est.component';

describe('BurkinaRegionEstComponent', () => {
  let component: BurkinaRegionEstComponent;
  let fixture: ComponentFixture<BurkinaRegionEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionEstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
