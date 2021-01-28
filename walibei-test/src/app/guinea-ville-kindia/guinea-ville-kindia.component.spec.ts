import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleKindiaComponent } from './guinea-ville-kindia.component';

describe('GuineaVilleKindiaComponent', () => {
  let component: GuineaVilleKindiaComponent;
  let fixture: ComponentFixture<GuineaVilleKindiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleKindiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleKindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
