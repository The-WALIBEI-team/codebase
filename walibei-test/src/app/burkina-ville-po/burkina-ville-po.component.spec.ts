import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVillePoComponent } from './burkina-ville-po.component';

describe('BurkinaVillePoComponent', () => {
  let component: BurkinaVillePoComponent;
  let fixture: ComponentFixture<BurkinaVillePoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVillePoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVillePoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
