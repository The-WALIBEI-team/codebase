import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleTougueComponent } from './guinea-ville-tougue.component';

describe('GuineaVilleTougueComponent', () => {
  let component: GuineaVilleTougueComponent;
  let fixture: ComponentFixture<GuineaVilleTougueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleTougueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleTougueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
