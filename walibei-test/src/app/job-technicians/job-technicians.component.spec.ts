import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTechniciansComponent } from './job-technicians.component';

describe('JobTechniciansComponent', () => {
  let component: JobTechniciansComponent;
  let fixture: ComponentFixture<JobTechniciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTechniciansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTechniciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
