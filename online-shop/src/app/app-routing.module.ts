import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from '../app/auth/auth.guard';
const routes: Routes = [
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'product-page/:id', component: ProductPageComponent},// canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
  { path: 'edit-product/:id', component: EditProductComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
