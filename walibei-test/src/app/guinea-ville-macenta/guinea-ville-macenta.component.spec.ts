import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleMacentaComponent } from './guinea-ville-macenta.component';

describe('GuineaVilleMacentaComponent', () => {
  let component: GuineaVilleMacentaComponent;
  let fixture: ComponentFixture<GuineaVilleMacentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleMacentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleMacentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
