import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcRegionEquateurComponent } from './drc-region-equateur.component';

describe('DrcRegionEquateurComponent', () => {
  let component: DrcRegionEquateurComponent;
  let fixture: ComponentFixture<DrcRegionEquateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcRegionEquateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcRegionEquateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
