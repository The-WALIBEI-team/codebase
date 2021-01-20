import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkrelatedComponent } from './service-workrelated.component';

describe('ServiceWorkrelatedComponent', () => {
  let component: ServiceWorkrelatedComponent;
  let fixture: ComponentFixture<ServiceWorkrelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceWorkrelatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceWorkrelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
