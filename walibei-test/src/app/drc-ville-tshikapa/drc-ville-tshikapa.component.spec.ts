import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleTshikapaComponent } from './drc-ville-tshikapa.component';

describe('DrcVilleTshikapaComponent', () => {
  let component: DrcVilleTshikapaComponent;
  let fixture: ComponentFixture<DrcVilleTshikapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleTshikapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleTshikapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
