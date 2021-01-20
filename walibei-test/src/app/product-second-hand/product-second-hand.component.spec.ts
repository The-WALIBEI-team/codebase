import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSecondHandComponent } from './product-second-hand.component';

describe('ProductSecondHandComponent', () => {
  let component: ProductSecondHandComponent;
  let fixture: ComponentFixture<ProductSecondHandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSecondHandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSecondHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
