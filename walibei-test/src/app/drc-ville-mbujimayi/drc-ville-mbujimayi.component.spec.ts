import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleMbujimayiComponent } from './drc-ville-mbujimayi.component';

describe('DrcVilleMbujimayiComponent', () => {
  let component: DrcVilleMbujimayiComponent;
  let fixture: ComponentFixture<DrcVilleMbujimayiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleMbujimayiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleMbujimayiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
