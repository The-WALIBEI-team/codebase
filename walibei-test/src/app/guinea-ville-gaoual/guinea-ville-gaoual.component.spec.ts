import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleGaoualComponent } from './guinea-ville-gaoual.component';

describe('GuineaVilleGaoualComponent', () => {
  let component: GuineaVilleGaoualComponent;
  let fixture: ComponentFixture<GuineaVilleGaoualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleGaoualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleGaoualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
