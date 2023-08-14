import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  employeeEmail: string =''
  employeePassword: string=''

  constructor(private router:Router) {}

  onSubmit(){
    console.log('Email:',this.employeeEmail);
    console.log('Password:',this.employeePassword);
    this.router.navigate(['dashboard'])
  }
}
