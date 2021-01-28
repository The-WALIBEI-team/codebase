import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleTouganComponent } from './burkina-ville-tougan.component';

describe('BurkinaVilleTouganComponent', () => {
  let component: BurkinaVilleTouganComponent;
  let fixture: ComponentFixture<BurkinaVilleTouganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleTouganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleTouganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
