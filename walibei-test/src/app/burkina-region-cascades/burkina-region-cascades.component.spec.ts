import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionCascadesComponent } from './burkina-region-cascades.component';

describe('BurkinaRegionCascadesComponent', () => {
  let component: BurkinaRegionCascadesComponent;
  let fixture: ComponentFixture<BurkinaRegionCascadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionCascadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionCascadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
