import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleDedougouComponent } from './burkina-ville-dedougou.component';

describe('BurkinaVilleDedougouComponent', () => {
  let component: BurkinaVilleDedougouComponent;
  let fixture: ComponentFixture<BurkinaVilleDedougouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleDedougouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleDedougouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
