import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKabindaComponent } from './drc-ville-kabinda.component';

describe('DrcVilleKabindaComponent', () => {
  let component: DrcVilleKabindaComponent;
  let fixture: ComponentFixture<DrcVilleKabindaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKabindaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKabindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
