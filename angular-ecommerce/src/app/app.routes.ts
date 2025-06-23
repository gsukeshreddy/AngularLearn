import { Router, RouterLink, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home-routing-module').then(
        (m) => m.HomeRoutingModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./features/product/product-routing-module').then(
        (m) => m.ProductRoutingModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./features/orders/orders-routing-module').then(
        (m) => m.OrdersRoutingModule
      ),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/cart-routing-module').then(
        (m) => m.CartRoutingModule
      ),
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./features/checkout/checkout-routing-module').then(
        (m) => m.CheckoutRoutingModule
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
