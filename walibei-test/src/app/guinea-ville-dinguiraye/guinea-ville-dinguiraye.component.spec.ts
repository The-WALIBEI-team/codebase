import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleDinguirayeComponent } from './guinea-ville-dinguiraye.component';

describe('GuineaVilleDinguirayeComponent', () => {
  let component: GuineaVilleDinguirayeComponent;
  let fixture: ComponentFixture<GuineaVilleDinguirayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleDinguirayeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleDinguirayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
