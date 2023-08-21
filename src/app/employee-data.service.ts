import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private employeeAPIs = 'https://run.mocky.io/v3/89e9f836-2aa2-4779-9556-4bff31fbab49'


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeAPIs)
  }

  getByID(id: number): Observable<Employee | undefined>{
    const allEmployee = this.http.get<Employee[]>(this.employeeAPIs).pipe(map(e=> e.find(e=>e.id === id)))
    console.log(allEmployee);
    return allEmployee;
  }
  createEmployee(employee:Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.employeeAPIs,employee,this.httpOptions)
  }
}
