import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaRegionFaranahComponent } from './guinea-region-faranah.component';

describe('GuineaRegionFaranahComponent', () => {
  let component: GuineaRegionFaranahComponent;
  let fixture: ComponentFixture<GuineaRegionFaranahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaRegionFaranahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaRegionFaranahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
