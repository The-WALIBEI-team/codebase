import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleKoupelaComponent } from './burkina-ville-koupela.component';

describe('BurkinaVilleKoupelaComponent', () => {
  let component: BurkinaVilleKoupelaComponent;
  let fixture: ComponentFixture<BurkinaVilleKoupelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleKoupelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleKoupelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
