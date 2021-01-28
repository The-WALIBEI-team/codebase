import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleMamouComponent } from './guinea-ville-mamou.component';

describe('GuineaVilleMamouComponent', () => {
  let component: GuineaVilleMamouComponent;
  let fixture: ComponentFixture<GuineaVilleMamouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleMamouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleMamouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
