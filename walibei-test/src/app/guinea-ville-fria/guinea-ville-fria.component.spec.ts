import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleFriaComponent } from './guinea-ville-fria.component';

describe('GuineaVilleFriaComponent', () => {
  let component: GuineaVilleFriaComponent;
  let fixture: ComponentFixture<GuineaVilleFriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleFriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleFriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
