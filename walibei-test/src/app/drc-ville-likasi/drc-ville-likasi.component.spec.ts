import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleLikasiComponent } from './drc-ville-likasi.component';

describe('DrcVilleLikasiComponent', () => {
  let component: DrcVilleLikasiComponent;
  let fixture: ComponentFixture<DrcVilleLikasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleLikasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleLikasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
