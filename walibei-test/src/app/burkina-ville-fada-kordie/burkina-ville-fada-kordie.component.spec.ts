import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleFadaKordieComponent } from './burkina-ville-fada-kordie.component';

describe('BurkinaVilleFadaKordieComponent', () => {
  let component: BurkinaVilleFadaKordieComponent;
  let fixture: ComponentFixture<BurkinaVilleFadaKordieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleFadaKordieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleFadaKordieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
