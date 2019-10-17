import { Component } from '@angular/core';
import mockdata from '../assets/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private products = Object.values(mockdata);
}
