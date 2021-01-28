import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKinduComponent } from './drc-ville-kindu.component';

describe('DrcVilleKinduComponent', () => {
  let component: DrcVilleKinduComponent;
  let fixture: ComponentFixture<DrcVilleKinduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKinduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKinduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
