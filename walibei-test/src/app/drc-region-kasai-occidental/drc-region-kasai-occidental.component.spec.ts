import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionKasaiOccidentalComponent } from './drc-region-kasai-occidental.component';

describe('DrcRegionKasaiOccidentalComponent', () => {
  let component: DrcRegionKasaiOccidentalComponent;
  let fixture: ComponentFixture<DrcRegionKasaiOccidentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionKasaiOccidentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionKasaiOccidentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
