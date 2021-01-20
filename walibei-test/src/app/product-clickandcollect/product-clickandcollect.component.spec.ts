import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductClickandcollectComponent } from './product-clickandcollect.component';

describe('ProductClickandcollectComponent', () => {
  let component: ProductClickandcollectComponent;
  let fixture: ComponentFixture<ProductClickandcollectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductClickandcollectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductClickandcollectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
