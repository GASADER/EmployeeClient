import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  editFrom !: FormGroup;

  constructor(private router: Router, private fb: FormBuilder){}

  ngOnInit(): void {
      this.editFrom = this.fb.group({
        first_name: "",
        last_name: "",
        username: "",
        email:""
      })
  }
  onSubmit(){
      const editFromData = this.editFrom.value;
      console.log(editFromData);
      this.router.navigate(['dashboard']);
  }
}
