import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleBanforaComponent } from './burkina-ville-banfora.component';

describe('BurkinaVilleBanforaComponent', () => {
  let component: BurkinaVilleBanforaComponent;
  let fixture: ComponentFixture<BurkinaVilleBanforaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleBanforaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleBanforaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
