import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleGourcyComponent } from './burkina-ville-gourcy.component';

describe('BurkinaVilleGourcyComponent', () => {
  let component: BurkinaVilleGourcyComponent;
  let fixture: ComponentFixture<BurkinaVilleGourcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleGourcyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleGourcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
