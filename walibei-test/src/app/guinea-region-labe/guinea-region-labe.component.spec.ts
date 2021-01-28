import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaRegionLabeComponent } from './guinea-region-labe.component';

describe('GuineaRegionLabeComponent', () => {
  let component: GuineaRegionLabeComponent;
  let fixture: ComponentFixture<GuineaRegionLabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaRegionLabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaRegionLabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
