import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleOuagadougouComponent } from './burkina-ville-ouagadougou.component';

describe('BurkinaVilleOuagadougouComponent', () => {
  let component: BurkinaVilleOuagadougouComponent;
  let fixture: ComponentFixture<BurkinaVilleOuagadougouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleOuagadougouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleOuagadougouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
