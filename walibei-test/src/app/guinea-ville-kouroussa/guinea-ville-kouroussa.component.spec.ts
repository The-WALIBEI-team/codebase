import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleKouroussaComponent } from './guinea-ville-kouroussa.component';

describe('GuineaVilleKouroussaComponent', () => {
  let component: GuineaVilleKouroussaComponent;
  let fixture: ComponentFixture<GuineaVilleKouroussaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleKouroussaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleKouroussaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
