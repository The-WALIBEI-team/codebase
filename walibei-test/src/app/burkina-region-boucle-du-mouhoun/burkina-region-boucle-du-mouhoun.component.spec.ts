import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaRegionBoucleDuMouhounComponent } from './burkina-region-boucle-du-mouhoun.component';

describe('BurkinaRegionBoucleDuMouhounComponent', () => {
  let component: BurkinaRegionBoucleDuMouhounComponent;
  let fixture: ComponentFixture<BurkinaRegionBoucleDuMouhounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaRegionBoucleDuMouhounComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaRegionBoucleDuMouhounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
