import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleBuniaComponent } from './drc-ville-bunia.component';

describe('DrcVilleBuniaComponent', () => {
  let component: DrcVilleBuniaComponent;
  let fixture: ComponentFixture<DrcVilleBuniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleBuniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleBuniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
