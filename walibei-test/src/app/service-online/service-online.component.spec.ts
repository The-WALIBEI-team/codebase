import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOnlineComponent } from './service-online.component';

describe('ServiceOnlineComponent', () => {
  let component: ServiceOnlineComponent;
  let fixture: ComponentFixture<ServiceOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
