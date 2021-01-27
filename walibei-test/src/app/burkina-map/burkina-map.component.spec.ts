import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaMapComponent } from './burkina-map.component';

describe('BurkinaMapComponent', () => {
  let component: BurkinaMapComponent;
  let fixture: ComponentFixture<BurkinaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
