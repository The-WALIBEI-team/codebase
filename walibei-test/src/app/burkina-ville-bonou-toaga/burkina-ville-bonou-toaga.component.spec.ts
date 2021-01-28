import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleBonouToagaComponent } from './burkina-ville-bonou-toaga.component';

describe('BurkinaVilleBonouToagaComponent', () => {
  let component: BurkinaVilleBonouToagaComponent;
  let fixture: ComponentFixture<BurkinaVilleBonouToagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleBonouToagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleBonouToagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
