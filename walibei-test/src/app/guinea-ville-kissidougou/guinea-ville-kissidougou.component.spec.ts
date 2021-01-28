import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleKissidougouComponent } from './guinea-ville-kissidougou.component';

describe('GuineaVilleKissidougouComponent', () => {
  let component: GuineaVilleKissidougouComponent;
  let fixture: ComponentFixture<GuineaVilleKissidougouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleKissidougouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleKissidougouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
