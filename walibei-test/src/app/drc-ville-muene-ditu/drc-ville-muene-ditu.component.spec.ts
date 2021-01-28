import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleMueneDituComponent } from './drc-ville-muene-ditu.component';

describe('DrcVilleMueneDituComponent', () => {
  let component: DrcVilleMueneDituComponent;
  let fixture: ComponentFixture<DrcVilleMueneDituComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleMueneDituComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleMueneDituComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
