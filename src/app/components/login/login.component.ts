import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      employeeEmail: ['', [Validators.required, Validators.email]],
      employeePassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['dashboard']);
    }
  }
}
