import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleLolaComponent } from './guinea-ville-lola.component';

describe('GuineaVilleLolaComponent', () => {
  let component: GuineaVilleLolaComponent;
  let fixture: ComponentFixture<GuineaVilleLolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleLolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleLolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
