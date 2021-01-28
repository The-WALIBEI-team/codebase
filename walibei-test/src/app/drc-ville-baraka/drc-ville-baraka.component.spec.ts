import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleBarakaComponent } from './drc-ville-baraka.component';

describe('DrcVilleBarakaComponent', () => {
  let component: DrcVilleBarakaComponent;
  let fixture: ComponentFixture<DrcVilleBarakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleBarakaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleBarakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
