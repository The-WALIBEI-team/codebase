import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionShabaComponent } from './drc-region-shaba.component';

describe('DrcRegionShabaComponent', () => {
  let component: DrcRegionShabaComponent;
  let fixture: ComponentFixture<DrcRegionShabaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionShabaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionShabaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
