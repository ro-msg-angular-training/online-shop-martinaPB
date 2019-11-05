import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

fdescribe('LoginService', () => {
  let login: LoginService;
  let http: HttpClient;

  const loginData = {username: 'doej', fullname: 'John Doe', roles: ['user', 'customer']};

  beforeEach( () => {
    login = new LoginService(http);
    spyOn(login, 'login').and.returnValue(of(loginData));
  });

  fit('login service test', (done: DoneFn) => {
    login.login('doej', 'password').subscribe(response => {
      expect(response).toBe(loginData);
      done();
    });
  });

});