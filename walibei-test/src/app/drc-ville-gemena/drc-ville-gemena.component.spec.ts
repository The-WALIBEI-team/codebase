import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleGemenaComponent } from './drc-ville-gemena.component';

describe('DrcVilleGemenaComponent', () => {
  let component: DrcVilleGemenaComponent;
  let fixture: ComponentFixture<DrcVilleGemenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleGemenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleGemenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
