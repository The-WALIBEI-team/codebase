import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleYomouComponent } from './guinea-ville-yomou.component';

describe('GuineaVilleYomouComponent', () => {
  let component: GuineaVilleYomouComponent;
  let fixture: ComponentFixture<GuineaVilleYomouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleYomouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleYomouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
