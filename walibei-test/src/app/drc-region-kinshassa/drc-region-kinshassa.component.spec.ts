import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionKinshassaComponent } from './drc-region-kinshassa.component';

describe('DrcRegionKinshassaComponent', () => {
  let component: DrcRegionKinshassaComponent;
  let fixture: ComponentFixture<DrcRegionKinshassaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionKinshassaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionKinshassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
