import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleTanghinDassouriComponent } from './burkina-ville-tanghin-dassouri.component';

describe('BurkinaVilleTanghinDassouriComponent', () => {
  let component: BurkinaVilleTanghinDassouriComponent;
  let fixture: ComponentFixture<BurkinaVilleTanghinDassouriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleTanghinDassouriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleTanghinDassouriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
