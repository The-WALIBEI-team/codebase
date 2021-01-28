import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleLisalaComponent } from './drc-ville-lisala.component';

describe('DrcVilleLisalaComponent', () => {
  let component: DrcVilleLisalaComponent;
  let fixture: ComponentFixture<DrcVilleLisalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleLisalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleLisalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
