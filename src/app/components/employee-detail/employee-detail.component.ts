import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeDataService } from 'src/app/employee-data.service';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  
  employee?: Employee;

  editFrom!: FormGroup;
  

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private employeeDataService: EmployeeDataService
  ) {}

  ngOnInit(): void {
    this.getEditEmployee()
    console.log(this.employee);
  }

  getEditEmployee() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeDataService.getByID(id).subscribe((e)=>(
      this.employee = e
    ));
    this.editFrom = this.fb.group({
      first_name: `${this.employee?.first_name}`,
      last_name: `${this.employee?.last_name}`,
      username: `${this.employee?.username}`,
      email: `${this.employee?.email}`,
    });
  }

  onSubmit() {
    const editFromData = this.editFrom.value;
    this.employeeDataService.createEmployee(editFromData);
    console.log(editFromData);
    this.router.navigate(['dashboard']);
  }
}
