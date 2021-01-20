import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFreelancingComponent } from './service-freelancing.component';

describe('ServiceFreelancingComponent', () => {
  let component: ServiceFreelancingComponent;
  let fixture: ComponentFixture<ServiceFreelancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceFreelancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceFreelancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
