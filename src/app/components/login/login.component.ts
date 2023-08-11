import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  employeeEmail: string =''
  employeePassword: string=''

  onSubmit(){
    console.log('Email:',this.employeeEmail);
    console.log('Password:',this.employeePassword);
  }
}
