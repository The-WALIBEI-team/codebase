import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVillePissilaComponent } from './burkina-ville-pissila.component';

describe('BurkinaVillePissilaComponent', () => {
  let component: BurkinaVillePissilaComponent;
  let fixture: ComponentFixture<BurkinaVillePissilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVillePissilaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVillePissilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
