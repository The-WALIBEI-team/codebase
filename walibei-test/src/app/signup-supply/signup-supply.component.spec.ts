import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSupplyComponent } from './signup-supply.component';

describe('SignupSupplyComponent', () => {
  let component: SignupSupplyComponent;
  let fixture: ComponentFixture<SignupSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
