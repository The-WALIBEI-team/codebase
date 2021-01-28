import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleBomaComponent } from './drc-ville-boma.component';

describe('DrcVilleBomaComponent', () => {
  let component: DrcVilleBomaComponent;
  let fixture: ComponentFixture<DrcVilleBomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleBomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleBomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
