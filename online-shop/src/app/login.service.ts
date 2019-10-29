import { Injectable } from '@angular/core';
import mockdata from '../assets/products.json';
import { map, catchError } from 'rxjs/operators';
import { User } from './classes';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser1: Observable<User>;
  currentUser : User;


  constructor(private httpClient: HttpClient) {
   
   }

  login(username: string, password: string): Observable<User> {
    debugger
    this.currentUser1= this.httpClient.post<User>('http://localhost:3000/login', { username, password })
    .pipe(catchError(errorResponse => throwError(errorResponse)));
        return this.currentUser1;
  }

  setCurrentUser( user: User ) {
    this.currentUser = user;
  }
  getCurrentUser(): User {
    debugger
    const user = this.currentUser;
    return user;
  }
}
