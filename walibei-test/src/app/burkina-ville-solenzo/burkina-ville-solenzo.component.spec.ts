import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleSolenzoComponent } from './burkina-ville-solenzo.component';

describe('BurkinaVilleSolenzoComponent', () => {
  let component: BurkinaVilleSolenzoComponent;
  let fixture: ComponentFixture<BurkinaVilleSolenzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleSolenzoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleSolenzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
