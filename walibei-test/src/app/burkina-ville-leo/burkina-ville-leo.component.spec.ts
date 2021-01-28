import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleLeoComponent } from './burkina-ville-leo.component';

describe('BurkinaVilleLeoComponent', () => {
  let component: BurkinaVilleLeoComponent;
  let fixture: ComponentFixture<BurkinaVilleLeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleLeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleLeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
