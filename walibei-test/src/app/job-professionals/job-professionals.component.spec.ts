import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobProfessionalsComponent } from './job-professionals.component';

describe('JobProfessionalsComponent', () => {
  let component: JobProfessionalsComponent;
  let fixture: ComponentFixture<JobProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobProfessionalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
