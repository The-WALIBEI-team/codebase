import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleZongoComponent } from './drc-ville-zongo.component';

describe('DrcVilleZongoComponent', () => {
  let component: DrcVilleZongoComponent;
  let fixture: ComponentFixture<DrcVilleZongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleZongoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleZongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
