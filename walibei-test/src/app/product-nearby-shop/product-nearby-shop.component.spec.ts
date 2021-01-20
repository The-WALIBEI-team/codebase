import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNearbyShopComponent } from './product-nearby-shop.component';

describe('ProductNearbyShopComponent', () => {
  let component: ProductNearbyShopComponent;
  let fixture: ComponentFixture<ProductNearbyShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNearbyShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNearbyShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
