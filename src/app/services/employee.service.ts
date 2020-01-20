import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees = [];
  employeeAPI: string;

  constructor(
    private http: HttpClient
  ) {
    this.employeeAPI = 'http://localhost:8080/api/employees';
  }
  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeeAPI);
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(this.employeeAPI + '/' + employeeId);
  }
  saveEmployee(employee: Employee){
    return this.http.post(this.employeeAPI,employee);
   
  }
  updateEmployee(value: Employee){
    return this.http.put(this.employeeAPI,value);
  }
  deleteEmployeeById(employeeId: number) {
    return this.http.delete(this.employeeAPI + '/' + employeeId, { responseType: 'text' });
  }
 
}
