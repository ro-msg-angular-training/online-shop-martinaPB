import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartItem, Product } from '../classes.js';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
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
    const id = +this.route.snapshot.paramMap.get('id');
    this.products.getProduct(id).subscribe(data => {
      this.product = data
      this.formdata = new FormGroup({
        name: new FormControl(this.product.name),
        category: new FormControl(this.product.category),
        image: new FormControl(this.product.image),
        price: new FormControl(this.product.price),
        description: new FormControl(this.product.description)
      });
    
    });
  }
  onClickSubmit() {
   
  debugger
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
