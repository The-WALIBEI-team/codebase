import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInpersonComponent } from './service-inperson.component';

describe('ServiceInpersonComponent', () => {
  let component: ServiceInpersonComponent;
  let fixture: ComponentFixture<ServiceInpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
