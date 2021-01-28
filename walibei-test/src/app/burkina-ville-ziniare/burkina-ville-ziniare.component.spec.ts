import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleZiniareComponent } from './burkina-ville-ziniare.component';

describe('BurkinaVilleZiniareComponent', () => {
  let component: BurkinaVilleZiniareComponent;
  let fixture: ComponentFixture<BurkinaVilleZiniareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleZiniareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleZiniareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
