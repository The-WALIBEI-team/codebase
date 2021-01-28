import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKinshassaComponent } from './drc-ville-kinshassa.component';

describe('DrcVilleKinshassaComponent', () => {
  let component: DrcVilleKinshassaComponent;
  let fixture: ComponentFixture<DrcVilleKinshassaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKinshassaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKinshassaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
