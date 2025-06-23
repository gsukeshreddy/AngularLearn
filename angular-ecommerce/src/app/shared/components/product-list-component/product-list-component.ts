import { Component, EventEmitter, input, output } from '@angular/core';
import { Product } from '../../../features/product/models/product';
import { CartService } from '../../../features/cart/services/cart-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  imports: [CommonModule],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  productList = input<Product[]>();
  addToCart = output<Product>();
  removedFromCart = output<Product>();
  displaySimpleDetails = input<boolean>(false);

  constructor(private cartService: CartService) {}

  onItemAddedToCart = (product: Product) => {
    this.addToCart.emit(product);
  };

  onItemRemovedFromCart = (product: Product) => {
    this.removedFromCart.emit(product);
  };

  isItemInCart = (itemId: number | undefined | null): boolean => {
    return this.cartService.isItemInCart(itemId || -1);
  };
}
