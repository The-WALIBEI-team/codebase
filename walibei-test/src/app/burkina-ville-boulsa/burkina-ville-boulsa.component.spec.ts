import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleBoulsaComponent } from './burkina-ville-boulsa.component';

describe('BurkinaVilleBoulsaComponent', () => {
  let component: BurkinaVilleBoulsaComponent;
  let fixture: ComponentFixture<BurkinaVilleBoulsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleBoulsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleBoulsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
