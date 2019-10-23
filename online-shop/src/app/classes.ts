export class Product {
    id: number;
    name: string;
    category: string;
    image: string;
    price: number;
    description: string;
  }
  
  export class CartItem {
    id: number;
    name: string;
    category: string;
    image: string;
    price: number;
    description: string;
  }

  export interface User {
    username: string;
    fullname: string;
    roles: string[];
  }