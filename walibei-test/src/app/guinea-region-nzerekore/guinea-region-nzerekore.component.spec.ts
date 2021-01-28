import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaRegionNzerekoreComponent } from './guinea-region-nzerekore.component';

describe('GuineaRegionNzerekoreComponent', () => {
  let component: GuineaRegionNzerekoreComponent;
  let fixture: ComponentFixture<GuineaRegionNzerekoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaRegionNzerekoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaRegionNzerekoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
