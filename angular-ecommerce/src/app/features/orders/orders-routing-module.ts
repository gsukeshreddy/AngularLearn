import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPage } from './pages/orders-page/orders-page';

const orderRoutes: Routes = [{ path: '', component: OrdersPage }];

@NgModule({
  imports: [RouterModule.forChild(orderRoutes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
