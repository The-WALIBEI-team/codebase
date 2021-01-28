import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleLeloumaComponent } from './guinea-ville-lelouma.component';

describe('GuineaVilleLeloumaComponent', () => {
  let component: GuineaVilleLeloumaComponent;
  let fixture: ComponentFixture<GuineaVilleLeloumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleLeloumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleLeloumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
