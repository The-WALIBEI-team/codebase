import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleDiedougouComponent } from './burkina-ville-diedougou.component';

describe('BurkinaVilleDiedougouComponent', () => {
  let component: BurkinaVilleDiedougouComponent;
  let fixture: ComponentFixture<BurkinaVilleDiedougouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleDiedougouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleDiedougouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
