import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKisanganiComponent } from './drc-ville-kisangani.component';

describe('DrcVilleKisanganiComponent', () => {
  let component: DrcVilleKisanganiComponent;
  let fixture: ComponentFixture<DrcVilleKisanganiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKisanganiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKisanganiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
