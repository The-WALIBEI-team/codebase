import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleBukavuComponent } from './drc-ville-bukavu.component';

describe('DrcVilleBukavuComponent', () => {
  let component: DrcVilleBukavuComponent;
  let fixture: ComponentFixture<DrcVilleBukavuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleBukavuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleBukavuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
