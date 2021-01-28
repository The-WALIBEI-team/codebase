import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleKamsarComponent } from './guinea-ville-kamsar.component';

describe('GuineaVilleKamsarComponent', () => {
  let component: GuineaVilleKamsarComponent;
  let fixture: ComponentFixture<GuineaVilleKamsarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleKamsarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleKamsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
