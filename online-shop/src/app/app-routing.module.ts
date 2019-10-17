import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent }  from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'products',  component: ProductListComponent },
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'cart',  component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
