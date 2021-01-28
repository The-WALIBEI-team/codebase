import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionBandunduComponent } from './drc-region-bandundu.component';

describe('DrcRegionBandunduComponent', () => {
  let component: DrcRegionBandunduComponent;
  let fixture: ComponentFixture<DrcRegionBandunduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionBandunduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionBandunduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
