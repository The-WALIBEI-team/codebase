import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleKoudougouComponent } from './burkina-ville-koudougou.component';

describe('BurkinaVilleKoudougouComponent', () => {
  let component: BurkinaVilleKoudougouComponent;
  let fixture: ComponentFixture<BurkinaVilleKoudougouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleKoudougouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleKoudougouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
