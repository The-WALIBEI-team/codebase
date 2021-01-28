import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaRegionKindiaComponent } from './guinea-region-kindia.component';

describe('GuineaRegionKindiaComponent', () => {
  let component: GuineaRegionKindiaComponent;
  let fixture: ComponentFixture<GuineaRegionKindiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaRegionKindiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaRegionKindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
