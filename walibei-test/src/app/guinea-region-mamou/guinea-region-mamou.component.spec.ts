import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaRegionMamouComponent } from './guinea-region-mamou.component';

describe('GuineaRegionMamouComponent', () => {
  let component: GuineaRegionMamouComponent;
  let fixture: ComponentFixture<GuineaRegionMamouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaRegionMamouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaRegionMamouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
