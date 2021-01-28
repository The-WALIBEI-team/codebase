import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKengeComponent } from './drc-ville-kenge.component';

describe('DrcVilleKengeComponent', () => {
  let component: DrcVilleKengeComponent;
  let fixture: ComponentFixture<DrcVilleKengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
