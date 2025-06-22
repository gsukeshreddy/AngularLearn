import { Component, OnInit, signal } from '@angular/core';
import { ProductListComponent } from '../../../../shared/components/product-list-component/product-list-component';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list-page',
  imports: [ProductListComponent],
  templateUrl: './product-list-page.html',
  styleUrl: './product-list-page.css',
})
export class ProductListPage implements OnInit {
  products = signal<Product[]>([]);
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products.set(data);
    });
  }
}
