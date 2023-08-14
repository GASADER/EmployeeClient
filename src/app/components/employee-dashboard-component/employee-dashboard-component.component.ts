import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/employee-data.service';
import { Employee } from 'src/app/employee';
@Component({
  selector: 'app-employee-dashboard-component',
  templateUrl: './employee-dashboard-component.component.html',
  styleUrls: ['./employee-dashboard-component.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

    employees: Employee[] = []

    constructor(private employeeService: EmployeeDataService){}

    ngOnInit(): void {
        this.employeeService.gatAll().subscribe((employees) => {
          this.employees = employees
          console.log(this.employees)
        })
    }
}
