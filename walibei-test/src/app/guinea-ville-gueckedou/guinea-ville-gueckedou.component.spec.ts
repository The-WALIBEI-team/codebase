import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleGueckedouComponent } from './guinea-ville-gueckedou.component';

describe('GuineaVilleGueckedouComponent', () => {
  let component: GuineaVilleGueckedouComponent;
  let fixture: ComponentFixture<GuineaVilleGueckedouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleGueckedouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleGueckedouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
