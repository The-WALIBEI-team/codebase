import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleKhyonComponent } from './burkina-ville-khyon.component';

describe('BurkinaVilleKhyonComponent', () => {
  let component: BurkinaVilleKhyonComponent;
  let fixture: ComponentFixture<BurkinaVilleKhyonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleKhyonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleKhyonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
