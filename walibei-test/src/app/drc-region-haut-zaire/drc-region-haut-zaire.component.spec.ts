import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionHautZaireComponent } from './drc-region-haut-zaire.component';

describe('DrcRegionHautZaireComponent', () => {
  let component: DrcRegionHautZaireComponent;
  let fixture: ComponentFixture<DrcRegionHautZaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionHautZaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionHautZaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
