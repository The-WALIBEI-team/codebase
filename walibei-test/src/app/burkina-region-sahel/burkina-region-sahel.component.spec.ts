import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionSahelComponent } from './burkina-region-sahel.component';

describe('BurkinaRegionSahelComponent', () => {
  let component: BurkinaRegionSahelComponent;
  let fixture: ComponentFixture<BurkinaRegionSahelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionSahelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionSahelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
