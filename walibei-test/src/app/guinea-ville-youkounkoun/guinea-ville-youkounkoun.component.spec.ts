import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleYoukounkounComponent } from './guinea-ville-youkounkoun.component';

describe('GuineaVilleYoukounkounComponent', () => {
  let component: GuineaVilleYoukounkounComponent;
  let fixture: ComponentFixture<GuineaVilleYoukounkounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleYoukounkounComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleYoukounkounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
