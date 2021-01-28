import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleTenkodogoComponent } from './burkina-ville-tenkodogo.component';

describe('BurkinaVilleTenkodogoComponent', () => {
  let component: BurkinaVilleTenkodogoComponent;
  let fixture: ComponentFixture<BurkinaVilleTenkodogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleTenkodogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleTenkodogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
