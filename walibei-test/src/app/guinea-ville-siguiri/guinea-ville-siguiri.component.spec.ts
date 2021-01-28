import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleSiguiriComponent } from './guinea-ville-siguiri.component';

describe('GuineaVilleSiguiriComponent', () => {
  let component: GuineaVilleSiguiriComponent;
  let fixture: ComponentFixture<GuineaVilleSiguiriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleSiguiriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleSiguiriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
