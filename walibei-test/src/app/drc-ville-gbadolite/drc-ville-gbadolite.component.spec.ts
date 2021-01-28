import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleGbadoliteComponent } from './drc-ville-gbadolite.component';

describe('DrcVilleGbadoliteComponent', () => {
  let component: DrcVilleGbadoliteComponent;
  let fixture: ComponentFixture<DrcVilleGbadoliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleGbadoliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleGbadoliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
