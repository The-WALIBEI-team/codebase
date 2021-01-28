import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionSudOuestComponent } from './burkina-region-sud-ouest.component';

describe('BurkinaRegionSudOuestComponent', () => {
  let component: BurkinaRegionSudOuestComponent;
  let fixture: ComponentFixture<BurkinaRegionSudOuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionSudOuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionSudOuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
