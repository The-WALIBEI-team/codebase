import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleDalabaComponent } from './guinea-ville-dalaba.component';

describe('GuineaVilleDalabaComponent', () => {
  let component: GuineaVilleDalabaComponent;
  let fixture: ComponentFixture<GuineaVilleDalabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleDalabaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleDalabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
