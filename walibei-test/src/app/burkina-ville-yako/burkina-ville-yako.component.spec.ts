import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleYakoComponent } from './burkina-ville-yako.component';

describe('BurkinaVilleYakoComponent', () => {
  let component: BurkinaVilleYakoComponent;
  let fixture: ComponentFixture<BurkinaVilleYakoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleYakoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleYakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
