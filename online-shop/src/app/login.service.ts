import { Injectable } from '@angular/core';
import mockdata from '../assets/products.json';
import { map, catchError } from 'rxjs/operators';
import { User } from './classes';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser: User;

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    return this.httpClient.post<User>('http://localhost:3000/login', { username, password })
      .pipe(map(user => {
        if (user) {
          this.currentUser = user;
        }
        return user;
      }),
        catchError(errorResponse => throwError(errorResponse)));
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}
