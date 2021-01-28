import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionCentreOuestComponent } from './burkina-region-centre-ouest.component';

describe('BurkinaRegionCentreOuestComponent', () => {
  let component: BurkinaRegionCentreOuestComponent;
  let fixture: ComponentFixture<BurkinaRegionCentreOuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionCentreOuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionCentreOuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
