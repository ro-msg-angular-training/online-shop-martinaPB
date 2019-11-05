import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { User, Role } from './classes';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUser1: Observable<User>;
  currentUser: User;
  constructor(private httpClient: HttpClient) {

  }

  login(username: string, password: string): Observable<User> {
    this.currentUser1 = this.httpClient.post<User>('http://localhost:3000/login', { username, password })
      .pipe(catchError(errorResponse => throwError(errorResponse)));
    return this.currentUser1;
  }
  setCurrentUser(user: User) {
    this.currentUser = user;
  }
  getCurrentUser(): User {
    const user = this.currentUser;
    return user;
  }
  adminUser(): boolean {
    return this.currentUser.roles.includes(Role.ADMIN, 0);
  }
  customerUser(): boolean {
    return this.currentUser.roles.includes(Role.CUSTOMER, 0);
  }
}
