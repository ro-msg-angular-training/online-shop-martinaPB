import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../classes.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  formdata: FormGroup;
  currentUser: User;
  okFlag = false;
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
  onClickSubmit(data: NgForm) {
    const user = this.formdata.value.username;
    const pass = this.formdata.value.password;
    //this.formdata.reset();
    debugger
    this.okFlag = true;
    this.login.login(this.formdata.controls.username.value, this.formdata.controls.password.value)
      .subscribe(
        user => {
          this.currentUser = user;
          console.log(user);
          //this.isLoading = false;
          this.router.navigateByUrl('/products');
        });
  }
}
