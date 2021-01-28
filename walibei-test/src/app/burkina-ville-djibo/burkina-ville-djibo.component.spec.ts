import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleDjiboComponent } from './burkina-ville-djibo.component';

describe('BurkinaVilleDjiboComponent', () => {
  let component: BurkinaVilleDjiboComponent;
  let fixture: ComponentFixture<BurkinaVilleDjiboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleDjiboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleDjiboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
