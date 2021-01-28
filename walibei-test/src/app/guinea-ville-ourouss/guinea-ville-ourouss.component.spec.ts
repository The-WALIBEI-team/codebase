import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleOuroussComponent } from './guinea-ville-ourouss.component';

describe('GuineaVilleOuroussComponent', () => {
  let component: GuineaVilleOuroussComponent;
  let fixture: ComponentFixture<GuineaVilleOuroussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleOuroussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleOuroussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
