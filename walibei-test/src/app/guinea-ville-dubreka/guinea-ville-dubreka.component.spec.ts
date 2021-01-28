import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleDubrekaComponent } from './guinea-ville-dubreka.component';

describe('GuineaVilleDubrekaComponent', () => {
  let component: GuineaVilleDubrekaComponent;
  let fixture: ComponentFixture<GuineaVilleDubrekaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleDubrekaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleDubrekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
