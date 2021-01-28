import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcVilleKanangaComponent } from './drc-ville-kananga.component';

describe('DrcVilleKanangaComponent', () => {
  let component: DrcVilleKanangaComponent;
  let fixture: ComponentFixture<DrcVilleKanangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrcVilleKanangaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcVilleKanangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
