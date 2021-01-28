import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurkinaVilleMangaComponent } from './burkina-ville-manga.component';

describe('BurkinaVilleMangaComponent', () => {
  let component: BurkinaVilleMangaComponent;
  let fixture: ComponentFixture<BurkinaVilleMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurkinaVilleMangaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurkinaVilleMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
