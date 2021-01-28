import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleKoukaComponent } from './burkina-ville-kouka.component';

describe('BurkinaVilleKoukaComponent', () => {
  let component: BurkinaVilleKoukaComponent;
  let fixture: ComponentFixture<BurkinaVilleKoukaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleKoukaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleKoukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
