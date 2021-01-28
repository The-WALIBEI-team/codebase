import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaRegionConakryComponent } from './guinea-region-conakry.component';

describe('GuineaRegionConakryComponent', () => {
  let component: GuineaRegionConakryComponent;
  let fixture: ComponentFixture<GuineaRegionConakryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaRegionConakryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaRegionConakryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
