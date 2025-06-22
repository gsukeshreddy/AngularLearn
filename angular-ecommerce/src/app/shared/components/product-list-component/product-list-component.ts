import { Component, input } from '@angular/core';
import { Product } from '../../../features/product/models/product';

@Component({
  selector: 'app-product-list-component',
  imports: [],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  productList = input<Product[]>();
}
