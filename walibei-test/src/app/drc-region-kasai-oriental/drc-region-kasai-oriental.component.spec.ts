import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionKasaiOrientalComponent } from './drc-region-kasai-oriental.component';

describe('DrcRegionKasaiOrientalComponent', () => {
  let component: DrcRegionKasaiOrientalComponent;
  let fixture: ComponentFixture<DrcRegionKasaiOrientalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionKasaiOrientalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionKasaiOrientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
