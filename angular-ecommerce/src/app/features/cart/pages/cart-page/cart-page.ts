import { Component, OnInit, signal } from '@angular/core';
import { Product } from '../../../product/models/product';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-cart-page',
  imports: [],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css',
})
export class CartPage implements OnInit {
  cartItems = signal<Product[]>([]);
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems.set(data);
    });
  }

  removeFromCart(product: Product) {
    this.cartService.removeCartItem(product);
  }

  getCartTotal(): number {
    return parseFloat(
      this.cartItems()
        .reduce((sum, item) => sum + (item.price || 0), 0)
        .toFixed(2)
    );
  }
}
