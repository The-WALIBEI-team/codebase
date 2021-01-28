import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleDabolaComponent } from './guinea-ville-dabola.component';

describe('GuineaVilleDabolaComponent', () => {
  let component: GuineaVilleDabolaComponent;
  let fixture: ComponentFixture<GuineaVilleDabolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleDabolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleDabolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
