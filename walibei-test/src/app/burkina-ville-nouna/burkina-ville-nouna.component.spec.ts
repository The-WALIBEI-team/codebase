import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleNounaComponent } from './burkina-ville-nouna.component';

describe('BurkinaVilleNounaComponent', () => {
  let component: BurkinaVilleNounaComponent;
  let fixture: ComponentFixture<BurkinaVilleNounaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleNounaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleNounaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
