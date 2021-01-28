import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleBoboDioulassoComponent } from './burkina-ville-bobo-dioulasso.component';

describe('BurkinaVilleBoboDioulassoComponent', () => {
  let component: BurkinaVilleBoboDioulassoComponent;
  let fixture: ComponentFixture<BurkinaVilleBoboDioulassoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleBoboDioulassoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleBoboDioulassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
