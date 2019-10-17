import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './products.service';
import { CartItemsService } from './cart-items.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService, CartItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
