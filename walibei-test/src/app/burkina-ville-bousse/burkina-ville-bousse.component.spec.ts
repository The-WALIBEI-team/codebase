import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleBousseComponent } from './burkina-ville-bousse.component';

describe('BurkinaVilleBousseComponent', () => {
  let component: BurkinaVilleBousseComponent;
  let fixture: ComponentFixture<BurkinaVilleBousseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleBousseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleBousseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
