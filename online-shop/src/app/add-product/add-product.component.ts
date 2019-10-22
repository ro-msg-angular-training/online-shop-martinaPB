import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductsService } from '../products.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../classes';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  title = "Add new product";
  product: Product;
  constructor(
    private products: ProductsService,
    private http: HttpClient,
    private location: Location
  ) { }

  ngOnInit() {
  }
  onClickSubmit(data: Product){
    debugger;

    const body = {
      "name": data.name,
      "category": data.category,
      "price": data.price,
      "image": data.image,
      "description": data.description
    };
    return this.http.post<Product>("http://localhost:3000/products", body).subscribe();    
  }

  goBack(): void {
    this.location.back();
  }
}
