import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleBokeComponent } from './guinea-ville-boke.component';

describe('GuineaVilleBokeComponent', () => {
  let component: GuineaVilleBokeComponent;
  let fixture: ComponentFixture<GuineaVilleBokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleBokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleBokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
