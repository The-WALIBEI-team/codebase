import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleBoffaComponent } from './guinea-ville-boffa.component';

describe('GuineaVilleBoffaComponent', () => {
  let component: GuineaVilleBoffaComponent;
  let fixture: ComponentFixture<GuineaVilleBoffaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleBoffaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleBoffaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
