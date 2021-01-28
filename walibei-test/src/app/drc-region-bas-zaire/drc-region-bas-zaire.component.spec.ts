import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionBasZaireComponent } from './drc-region-bas-zaire.component';

describe('DrcRegionBasZaireComponent', () => {
  let component: DrcRegionBasZaireComponent;
  let fixture: ComponentFixture<DrcRegionBasZaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionBasZaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionBasZaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
