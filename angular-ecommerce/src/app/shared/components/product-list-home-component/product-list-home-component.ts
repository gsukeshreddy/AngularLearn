import { Component, input } from '@angular/core';
import { Product } from '../../../features/product/models/product';

@Component({
  selector: 'app-product-list-home-component',
  imports: [],
  templateUrl: './product-list-home-component.html',
  styleUrl: './product-list-home-component.css',
})
export class ProductListHomeComponent {
  productList = input<Product[]>();
}
