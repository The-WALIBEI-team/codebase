import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleKerouaneComponent } from './guinea-ville-kerouane.component';

describe('GuineaVilleKerouaneComponent', () => {
  let component: GuineaVilleKerouaneComponent;
  let fixture: ComponentFixture<GuineaVilleKerouaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleKerouaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleKerouaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
