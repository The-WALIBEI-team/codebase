import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleKankanComponent } from './guinea-ville-kankan.component';

describe('GuineaVilleKankanComponent', () => {
  let component: GuineaVilleKankanComponent;
  let fixture: ComponentFixture<GuineaVilleKankanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleKankanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleKankanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
