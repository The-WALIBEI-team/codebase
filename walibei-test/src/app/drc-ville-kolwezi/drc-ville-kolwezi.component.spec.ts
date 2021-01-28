import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKolweziComponent } from './drc-ville-kolwezi.component';

describe('DrcVilleKolweziComponent', () => {
  let component: DrcVilleKolweziComponent;
  let fixture: ComponentFixture<DrcVilleKolweziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKolweziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKolweziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
