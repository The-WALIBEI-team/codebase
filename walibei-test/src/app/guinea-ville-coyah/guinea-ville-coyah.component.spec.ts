import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleCoyahComponent } from './guinea-ville-coyah.component';

describe('GuineaVilleCoyahComponent', () => {
  let component: GuineaVilleCoyahComponent;
  let fixture: ComponentFixture<GuineaVilleCoyahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleCoyahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleCoyahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
