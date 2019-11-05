export interface Product {
  id: number;
  name: string;
  category: string;
  image?: string;
  price: number;
  description?: string;
}

export interface CartItem {
  id: number;
  name: string;
  category: string;
  image?: string;
  price: number;
  description?: string;
}

export interface User {
  username: string;
  fullname: string;
  roles: string[];
}

export enum Role {
  USER = 'user',
  CUSTOMER = 'customer',
  ADMIN = 'admin'
}