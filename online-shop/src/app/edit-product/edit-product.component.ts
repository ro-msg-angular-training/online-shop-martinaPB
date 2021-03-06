import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../classes.js';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as ProductListActions from '../store/actions/product-list.actions';
import * as fromApp from '../store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  title = "Edit product";
  product: Product;
  formdata: FormGroup;
  subscriptions: Subscription[] = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private products: ProductsService,
    private http: HttpClient,
    private store: Store<fromApp.IAppState>
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subscriptions.push(this.products.getProduct(id).subscribe(data => {
      this.product = data
      this.formdata = new FormGroup({
        name: new FormControl(this.product.name, Validators.required),
        category: new FormControl(this.product.category, Validators.required),
        image: new FormControl(this.product.image, Validators.required),
        price: new FormControl(this.product.price, Validators.compose([Validators.required, this.priceValidation])),
        description: new FormControl(this.product.description, Validators.required)
      });

    }));
  }
  priceValidation(formcontrol) {
    if (isNaN(formcontrol.value)) {
      return { "passwd": true };
    }
  }
  onClickSubmit() {
    const formValues = this.formdata.value;
    this.product.name = formValues.name;
    this.product.category = formValues.category;
    this.product.price = formValues.price;
    this.product.image = formValues.image;
    this.product.description = formValues.description;

    

    this.store.dispatch(new ProductListActions.EditProduct({ id: this.product.id, product: this.product }));
/*
    this.store.dispatch(new ProductListActions.EditProduct({ id: this.product.id, ...formValues }));
    */
  }
  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });

  }
}
