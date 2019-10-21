import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CartItem, Product } from '../classes.js';
import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  title = "Edit product";
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private products: ProductsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    //this.product = Object.values(mockdata)[id];

    this.http.get<Product>("http://localhost:3000/products/" + id)
            .subscribe(data => this.product = data);
  }
  onClickSubmit(data) {
    const id = +this.route.snapshot.paramMap.get('id');
    debugger;

    const body = {
      "id": data.id,
      "name": data.name,
      "category": data.category,
      "price": data.price,
      "image": data.image,
      "description": data.description
    };
    return this.http.put<Product>("http://localhost:3000/products/" + id, body).subscribe();
  }
}
