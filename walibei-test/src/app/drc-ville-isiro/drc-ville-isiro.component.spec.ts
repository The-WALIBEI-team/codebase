import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleIsiroComponent } from './drc-ville-isiro.component';

describe('DrcVilleIsiroComponent', () => {
  let component: DrcVilleIsiroComponent;
  let fixture: ComponentFixture<DrcVilleIsiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleIsiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleIsiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
