import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleOrodaraComponent } from './burkina-ville-orodara.component';

describe('BurkinaVilleOrodaraComponent', () => {
  let component: BurkinaVilleOrodaraComponent;
  let fixture: ComponentFixture<BurkinaVilleOrodaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleOrodaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleOrodaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
