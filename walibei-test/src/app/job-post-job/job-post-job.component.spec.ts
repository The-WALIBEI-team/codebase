import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPostJobComponent } from './job-post-job.component';

describe('JobPostJobComponent', () => {
  let component: JobPostJobComponent;
  let fixture: ComponentFixture<JobPostJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPostJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
