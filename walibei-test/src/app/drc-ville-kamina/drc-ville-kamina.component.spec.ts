import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKaminaComponent } from './drc-ville-kamina.component';

describe('DrcVilleKaminaComponent', () => {
  let component: DrcVilleKaminaComponent;
  let fixture: ComponentFixture<DrcVilleKaminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKaminaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKaminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
