import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleNzerekoreComponent } from './guinea-ville-nzerekore.component';

describe('GuineaVilleNzerekoreComponent', () => {
  let component: GuineaVilleNzerekoreComponent;
  let fixture: ComponentFixture<GuineaVilleNzerekoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleNzerekoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleNzerekoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
