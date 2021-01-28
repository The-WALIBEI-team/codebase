import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleFaranahComponent } from './guinea-ville-faranah.component';

describe('GuineaVilleFaranahComponent', () => {
  let component: GuineaVilleFaranahComponent;
  let fixture: ComponentFixture<GuineaVilleFaranahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleFaranahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleFaranahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
