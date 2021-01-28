import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionKivuComponent } from './drc-region-kivu.component';

describe('DrcRegionKivuComponent', () => {
  let component: DrcRegionKivuComponent;
  let fixture: ComponentFixture<DrcRegionKivuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionKivuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionKivuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
