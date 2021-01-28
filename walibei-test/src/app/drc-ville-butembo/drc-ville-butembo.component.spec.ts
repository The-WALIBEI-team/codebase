import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleButemboComponent } from './drc-ville-butembo.component';

describe('DrcVilleButemboComponent', () => {
  let component: DrcVilleButemboComponent;
  let fixture: ComponentFixture<DrcVilleButemboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleButemboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleButemboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
