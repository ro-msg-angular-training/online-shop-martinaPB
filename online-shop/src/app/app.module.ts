import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './products.service';
import { CartItemsService } from './cart-items.service';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { OrdersService } from './orders.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from '../app/store/reducers/app.reducer';
import { ProductListEffects } from './store/effects/product-list.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductListComponent,
    CartComponent,
    AddProductComponent,
    EditProductComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([ProductListEffects]),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ],
  providers: [ProductsService, CartItemsService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
