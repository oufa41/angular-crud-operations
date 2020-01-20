import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {


  
  selectedGETEmployeeIdOperation: boolean;
  employeeDataByIDForm;
  allEmployees: Employee[];
  employee;
  constructor(
    private usersService: EmployeeService,
    private route: Router,
    private forBuilder: FormBuilder,
    ) 
    { 
      
      this.employeeDataByIDForm = this.forBuilder.group({
        employeeId: ''
      });

    }

  ngOnInit() {
    this.getAllEmployee();
  }
  
  getAllEmployee() {
    this.usersService.getAllEmployees().subscribe(
      result => {
      this.allEmployees = result;
      console.log(this.allEmployees);
    })
  }
  
  getEmployeeIdSubmit(employeeId: number) {

    this.selectedGETEmployeeIdOperation = true;
    this.usersService.getEmployeeById(employeeId)
    .subscribe(result => {
      this.employee = result;
      console.log(result)
    },error => {
      window.alert(error.error.meesage);
    })
   
  }
  updateEmployee(employeeID: number){
    this.route.navigate(['operations/updateEmployee',employeeID]);
  }
}
