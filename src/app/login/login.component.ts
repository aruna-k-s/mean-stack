import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userRegisterForm: FormGroup;
  userLoginForm : FormGroup;;
  constructor() { }

  
  showPassword = false;
  confPassword = false;

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    this.userRegisterForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confPassword: new FormControl('', Validators.required)
    });
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }

  showLoginPassword(element) {
    const ele = document.getElementById(element);
    this.showPassword ? ele.setAttribute('type', 'text') : ele.setAttribute('type', 'password');
  }
}
