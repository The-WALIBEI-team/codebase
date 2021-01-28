import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleMaliComponent } from './guinea-ville-mali.component';

describe('GuineaVilleMaliComponent', () => {
  let component: GuineaVilleMaliComponent;
  let fixture: ComponentFixture<GuineaVilleMaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleMaliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleMaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
