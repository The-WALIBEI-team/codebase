import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaRegionKankanComponent } from './guinea-region-kankan.component';

describe('GuineaRegionKankanComponent', () => {
  let component: GuineaRegionKankanComponent;
  let fixture: ComponentFixture<GuineaRegionKankanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaRegionKankanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaRegionKankanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
