import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleDiapagaComponent } from './burkina-ville-diapaga.component';

describe('BurkinaVilleDiapagaComponent', () => {
  let component: BurkinaVilleDiapagaComponent;
  let fixture: ComponentFixture<BurkinaVilleDiapagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleDiapagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleDiapagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
