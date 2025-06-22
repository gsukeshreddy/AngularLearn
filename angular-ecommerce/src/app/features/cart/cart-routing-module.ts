import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPage } from './pages/cart-page/cart-page';

const cartRoutes: Routes = [{ path: '', component: CartPage }];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
