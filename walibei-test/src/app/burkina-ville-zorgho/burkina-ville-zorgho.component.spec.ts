import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleZorghoComponent } from './burkina-ville-zorgho.component';

describe('BurkinaVilleZorghoComponent', () => {
  let component: BurkinaVilleZorghoComponent;
  let fixture: ComponentFixture<BurkinaVilleZorghoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleZorghoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleZorghoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
