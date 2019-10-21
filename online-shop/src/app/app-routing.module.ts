import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent }  from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  { path: 'products',  component: ProductListComponent },
  { path: 'product-page/:id', component: ProductPageComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'cart',  component: CartComponent },
  { path: 'add-product',  component: AddProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
