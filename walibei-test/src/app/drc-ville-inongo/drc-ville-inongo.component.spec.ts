import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleInongoComponent } from './drc-ville-inongo.component';

describe('DrcVilleInongoComponent', () => {
  let component: DrcVilleInongoComponent;
  let fixture: ComponentFixture<DrcVilleInongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleInongoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleInongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
