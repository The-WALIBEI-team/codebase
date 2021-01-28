import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleTelimeleComponent } from './guinea-ville-telimele.component';

describe('GuineaVilleTelimeleComponent', () => {
  let component: GuineaVilleTelimeleComponent;
  let fixture: ComponentFixture<GuineaVilleTelimeleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleTelimeleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleTelimeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
