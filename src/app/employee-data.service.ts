import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private employeeAPIs = 'https://run.mocky.io/v3/89e9f836-2aa2-4779-9556-4bff31fbab49'


  constructor(private http: HttpClient) { }

  gatAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeAPIs)
  }
}
