import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnlineComponent } from './product-online.component';

describe('ProductOnlineComponent', () => {
  let component: ProductOnlineComponent;
  let fixture: ComponentFixture<ProductOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
