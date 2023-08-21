import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/employee-data.service';
import { Employee } from 'src/app/employee';
@Component({
  selector: 'app-employee-dashboard-component',
  templateUrl: './employee-dashboard-component.component.html',
  styleUrls: ['./employee-dashboard-component.component.css'],
})
export class EmployeeDashboardComponent implements OnInit {
  employees: Employee[] = [];
  showWallet: boolean = true;

  constructor(private employeeService: EmployeeDataService) {}

  ngOnInit(): void {
    this.employeeService.getAll().subscribe((employee) => {
      this.employees = employee;
      console.log(this.employees);
    });
  }

  hideWallet() {
    this.showWallet = !this.showWallet;
  }
}
