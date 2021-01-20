import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRepairersComponent } from './job-repairers.component';

describe('JobRepairersComponent', () => {
  let component: JobRepairersComponent;
  let fixture: ComponentFixture<JobRepairersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobRepairersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRepairersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
