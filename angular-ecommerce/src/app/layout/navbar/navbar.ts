import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../features/cart/services/cart-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, OnDestroy {
  cartItemCount = signal<number>(0);
  private subscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.subscription = this.cartService.cartItems$.subscribe((data) => {
      this.cartItemCount.set(data.length);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
