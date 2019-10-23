import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartItem, Product } from '../classes.js';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  title = "Edit product";
  product: Product;
  formdata: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private products: ProductsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    debugger
    const id = +this.route.snapshot.paramMap.get('id');
    this.products.getProduct(id).subscribe(data => {
      this.product = data
      this.formdata = new FormGroup({
        name: new FormControl(this.product.name, Validators.required), 
        category: new FormControl(this.product.category, Validators.required),
        image: new FormControl(this.product.image, Validators.required),
        price: new FormControl(this.product.price, Validators.compose([Validators.required, this.priceValidation])),
        description: new FormControl(this.product.description, Validators.required)
      });
    
    });
  }
  priceValidation(formcontrol) {
    if (isNaN(formcontrol.value)) {
       return {"passwd" : true};
    }
  }
  onClickSubmit() {
    const formValues = this.formdata.value;
    const product1: Product = {
      id: this.product.id,
      name: formValues.name,
      category: formValues.category,
      price: formValues.price,
      image: formValues.image,
      description: formValues.description
    };
    return this.http.put<Product>("http://localhost:3000/products/" +  this.product.id, product1).subscribe();
  }
  goBack(): void {
    this.location.back();
  }
}
