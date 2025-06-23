import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../product/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  private cartItems = new BehaviorSubject<Product[]>([]);

  // Observable for components to subscribe to
  public cartItems$ = this.cartItems.asObservable();

  addCartItem(product: Product) {
    const currentItems = this.cartItems.getValue();

    //emit to all the subscribers
    this.cartItems.next([...currentItems, product]);
  }

  removeCartItem(product: Product) {
    const updatedItems = this.cartItems
      .getValue()
      .filter((p) => p.id !== product.id);

    //emit to all the subscribers
    this.cartItems.next(updatedItems);
  }

  isItemInCart(itemId: number) {
    const currentItems = this.cartItems.getValue();
    return currentItems.some((x) => x.id === itemId);
  }
}
