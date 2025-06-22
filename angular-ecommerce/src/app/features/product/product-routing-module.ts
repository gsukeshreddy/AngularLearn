import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPage } from './components/product-list-page/product-list-page';
import { ProductDetailPage } from './components/product-detail-page/product-detail-page';

const productRoutes: Routes = [
  { path: '', component: ProductListPage },
  { path: ':id', component: ProductDetailPage },
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
