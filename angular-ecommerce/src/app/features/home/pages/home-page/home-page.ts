import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../product/models/product';
import { ProductService } from '../../../product/services/product-service';
import { ProductListHomeComponent } from '../../../../shared/components/product-list-home-component/product-list-home-component';
import { ProductsCarouselComponent } from '../../../../shared/components/products-carousel-component/products-carousel-component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  imports: [RouterLink, ProductListHomeComponent, ProductsCarouselComponent],
})
export class HomePage {
  productsList = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe((products) => {
      this.productsList.set(products);
    });
  }
}
