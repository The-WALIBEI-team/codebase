import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleButaComponent } from './drc-ville-buta.component';

describe('DrcVilleButaComponent', () => {
  let component: DrcVilleButaComponent;
  let fixture: ComponentFixture<DrcVilleButaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleButaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleButaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
