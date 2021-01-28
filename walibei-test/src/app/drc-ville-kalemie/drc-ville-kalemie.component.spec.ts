import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKalemieComponent } from './drc-ville-kalemie.component';

describe('DrcVilleKalemieComponent', () => {
  let component: DrcVilleKalemieComponent;
  let fixture: ComponentFixture<DrcVilleKalemieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKalemieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKalemieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
