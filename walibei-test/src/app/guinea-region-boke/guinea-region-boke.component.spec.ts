import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaRegionBokeComponent } from './guinea-region-boke.component';

describe('GuineaRegionBokeComponent', () => {
  let component: GuineaRegionBokeComponent;
  let fixture: ComponentFixture<GuineaRegionBokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaRegionBokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaRegionBokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
