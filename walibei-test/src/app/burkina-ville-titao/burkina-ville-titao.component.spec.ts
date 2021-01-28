import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleTitaoComponent } from './burkina-ville-titao.component';

describe('BurkinaVilleTitaoComponent', () => {
  let component: BurkinaVilleTitaoComponent;
  let fixture: ComponentFixture<BurkinaVilleTitaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleTitaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleTitaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
