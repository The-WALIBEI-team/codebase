import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleBoendeComponent } from './drc-ville-boende.component';

describe('DrcVilleBoendeComponent', () => {
  let component: DrcVilleBoendeComponent;
  let fixture: ComponentFixture<DrcVilleBoendeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleBoendeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleBoendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
