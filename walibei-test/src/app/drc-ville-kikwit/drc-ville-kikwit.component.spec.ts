import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKikwitComponent } from './drc-ville-kikwit.component';

describe('DrcVilleKikwitComponent', () => {
  let component: DrcVilleKikwitComponent;
  let fixture: ComponentFixture<DrcVilleKikwitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKikwitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKikwitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
