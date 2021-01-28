import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleLabeComponent } from './guinea-ville-labe.component';

describe('GuineaVilleLabeComponent', () => {
  let component: GuineaVilleLabeComponent;
  let fixture: ComponentFixture<GuineaVilleLabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleLabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleLabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
