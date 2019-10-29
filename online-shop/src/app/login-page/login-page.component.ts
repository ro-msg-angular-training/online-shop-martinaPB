import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../classes.js';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formdata: FormGroup;
  currentUser: User;
  okFlag = false;
  isLoginMode = true;
  constructor(
    private formBuilder: FormBuilder,
    private login: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formdata = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onClickSubmit(data: NgForm) {
    const user = this.formdata.value.username;
    const pass = this.formdata.value.password;
    //if (this.isLoginMode) {

    //} else {
    debugger
    this.okFlag = true;
   
    this.login.login(this.formdata.controls.username.value, this.formdata.controls.password.value)
      .pipe(first())
      .subscribe(
        user => {
          this.currentUser = user;
          console.log(user);
          this.okFlag = false;
          this.login.setCurrentUser(user);
          this.router.navigateByUrl('/products');
          
        });
       // this.router.navigateByUrl('/products');
    } 
    
    //this.formdata.reset();
 // }
}
