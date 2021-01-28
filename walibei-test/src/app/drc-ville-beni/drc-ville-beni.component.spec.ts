import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleBeniComponent } from './drc-ville-beni.component';

describe('DrcVilleBeniComponent', () => {
  let component: DrcVilleBeniComponent;
  let fixture: ComponentFixture<DrcVilleBeniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleBeniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleBeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
