import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuineaVilleBeylaComponent } from './guinea-ville-beyla.component';

describe('GuineaVilleBeylaComponent', () => {
  let component: GuineaVilleBeylaComponent;
  let fixture: ComponentFixture<GuineaVilleBeylaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuineaVilleBeylaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuineaVilleBeylaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
