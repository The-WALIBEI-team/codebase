import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionCentreComponent } from './burkina-region-centre.component';

describe('BurkinaRegionCentreComponent', () => {
  let component: BurkinaRegionCentreComponent;
  let fixture: ComponentFixture<BurkinaRegionCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
