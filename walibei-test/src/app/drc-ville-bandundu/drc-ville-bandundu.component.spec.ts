import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleBandunduComponent } from './drc-ville-bandundu.component';

describe('DrcVilleBandunduComponent', () => {
  let component: DrcVilleBandunduComponent;
  let fixture: ComponentFixture<DrcVilleBandunduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleBandunduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleBandunduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
