import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleKoubiaComponent } from './guinea-ville-koubia.component';

describe('GuineaVilleKoubiaComponent', () => {
  let component: GuineaVilleKoubiaComponent;
  let fixture: ComponentFixture<GuineaVilleKoubiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleKoubiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleKoubiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
