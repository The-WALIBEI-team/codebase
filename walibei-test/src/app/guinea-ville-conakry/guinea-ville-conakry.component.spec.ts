import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleConakryComponent } from './guinea-ville-conakry.component';

describe('GuineaVilleConakryComponent', () => {
  let component: GuineaVilleConakryComponent;
  let fixture: ComponentFixture<GuineaVilleConakryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleConakryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleConakryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
