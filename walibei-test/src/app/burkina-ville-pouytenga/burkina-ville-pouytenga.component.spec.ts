import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVillePouytengaComponent } from './burkina-ville-pouytenga.component';

describe('BurkinaVillePouytengaComponent', () => {
  let component: BurkinaVillePouytengaComponent;
  let fixture: ComponentFixture<BurkinaVillePouytengaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVillePouytengaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVillePouytengaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
