import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-boxed',
  templateUrl: './login-boxed.component.html',
  styles: []
})
export class LoginBoxedComponent implements OnInit {

  username = 'sunilkmr0680'
  password = 'ajnabiDost123'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false;

  // Dependency Injection for Router to use Router component to navigate to dashboard after 
  // successful login.
  constructor(private router: Router) { }

  ngOnInit() {
  }
  login(){
    // console.log(this.username);
    if(this.username === 'sunilkmr0680' && this.password === 'ajnabiDost123'){
      this.router.navigate(['baseLayout', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
