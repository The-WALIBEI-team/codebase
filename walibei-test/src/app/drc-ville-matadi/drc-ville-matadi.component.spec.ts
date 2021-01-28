import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleMatadiComponent } from './drc-ville-matadi.component';

describe('DrcVilleMatadiComponent', () => {
  let component: DrcVilleMatadiComponent;
  let fixture: ComponentFixture<DrcVilleMatadiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleMatadiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleMatadiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
