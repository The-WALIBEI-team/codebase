import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleMbandakaComponent } from './drc-ville-mbandaka.component';

describe('DrcVilleMbandakaComponent', () => {
  let component: DrcVilleMbandakaComponent;
  let fixture: ComponentFixture<DrcVilleMbandakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleMbandakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleMbandakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
