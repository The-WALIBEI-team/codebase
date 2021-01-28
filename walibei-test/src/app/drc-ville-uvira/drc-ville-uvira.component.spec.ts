import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleUviraComponent } from './drc-ville-uvira.component';

describe('DrcVilleUviraComponent', () => {
  let component: DrcVilleUviraComponent;
  let fixture: ComponentFixture<DrcVilleUviraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleUviraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleUviraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
