import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleGomaComponent } from './drc-ville-goma.component';

describe('DrcVilleGomaComponent', () => {
  let component: DrcVilleGomaComponent;
  let fixture: ComponentFixture<DrcVilleGomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleGomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleGomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
