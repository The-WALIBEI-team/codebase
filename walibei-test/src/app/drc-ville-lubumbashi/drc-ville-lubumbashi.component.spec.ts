import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleLubumbashiComponent } from './drc-ville-lubumbashi.component';

describe('DrcVilleLubumbashiComponent', () => {
  let component: DrcVilleLubumbashiComponent;
  let fixture: ComponentFixture<DrcVilleLubumbashiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleLubumbashiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleLubumbashiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
