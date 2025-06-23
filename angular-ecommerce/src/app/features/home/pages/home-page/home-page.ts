import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../product/models/product';
import { ProductService } from '../../../product/services/product-service';
import { ProductsCarouselComponent } from '../../../../shared/components/products-carousel-component/products-carousel-component';
import { CartService } from '../../../cart/services/cart-service';
import { ProductListComponent } from '../../../../shared/components/product-list-component/product-list-component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  imports: [RouterLink, ProductsCarouselComponent, ProductListComponent],
})
export class HomePage {
  productsList = signal<Product[]>([]);

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productService.getAllProducts().subscribe((products) => {
      this.productsList.set(products);
    });
  }

  addToCart = (product: Product) => {
    this.cartService.addCartItem(product);
  };

  removeFromCart = (product: Product) => {
    this.cartService.removeCartItem(product);
  };
}
