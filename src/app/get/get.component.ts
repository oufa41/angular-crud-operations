import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  greeting: any;
  name: string;
  employeeDataByIDForm;
  allEmployees: Employee[];
  employee;
  constructor(
    private usersService: EmployeeService,
    private route: Router,
    private forBuilder: FormBuilder,
    private webSocketService: WebSocketService
  ) {
    this.employeeDataByIDForm = this.forBuilder.group({
      employeeId: ''
    });


  }

  ngOnInit() {
    this.connect();
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.usersService.getAllEmployees().subscribe(
      result => {
        this.allEmployees = result;
        // console.log(this.allEmployees);
      })
  }

  getEmployeeIdSubmit() {
    const employeeId = this.employeeDataByIDForm.value.employeeId;
    if (employeeId || employeeId === 0) {
      this.usersService.getEmployeeById(employeeId)
        .subscribe(result => {
          console.log(result)
          this.employee = result;
        }, error => {
          this.employee = null;
          window.alert(error.error.message);
        })
    }
  }
  updateEmployee(employeeID: number) {
    this.route.navigate(['operations/updateEmployee', employeeID]);
  }
  connect() {
    this.webSocketService._connect(this.handleMessage, this);
  }

  handleMessage(message, component) {
    component.allEmployees = JSON.parse(message.body);
    console.log(component.allEmployees);
  }
}
