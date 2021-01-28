import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleBoromoComponent } from './burkina-ville-boromo.component';

describe('BurkinaVilleBoromoComponent', () => {
  let component: BurkinaVilleBoromoComponent;
  let fixture: ComponentFixture<BurkinaVilleBoromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleBoromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleBoromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
