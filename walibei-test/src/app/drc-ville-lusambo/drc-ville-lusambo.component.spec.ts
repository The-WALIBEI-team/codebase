import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleLusamboComponent } from './drc-ville-lusambo.component';

describe('DrcVilleLusamboComponent', () => {
  let component: DrcVilleLusamboComponent;
  let fixture: ComponentFixture<DrcVilleLusamboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleLusamboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleLusamboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
