import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleMandianaComponent } from './guinea-ville-mandiana.component';

describe('GuineaVilleMandianaComponent', () => {
  let component: GuineaVilleMandianaComponent;
  let fixture: ComponentFixture<GuineaVilleMandianaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleMandianaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleMandianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
