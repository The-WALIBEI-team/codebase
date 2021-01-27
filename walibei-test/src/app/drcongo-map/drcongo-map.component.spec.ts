import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcongoMapComponent } from './drcongo-map.component';

describe('DrcongoMapComponent', () => {
  let component: DrcongoMapComponent;
  let fixture: ComponentFixture<DrcongoMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcongoMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcongoMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
