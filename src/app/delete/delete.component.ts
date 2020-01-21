import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deleteEmployeeDataByIDForm;
  constructor(
    private usersService: EmployeeService,
    private forBuilder: FormBuilder
  ) { 
    this.deleteEmployeeDataByIDForm = this.forBuilder.group({
      employeeId: 0
    });
  }

  ngOnInit() {
  }
  deleteEmployeeIdSubmit(employeeId: number) {
    this.usersService.deleteEmployeeById(employeeId).subscribe(result => {
      window.alert(result);
    },error =>{
      error = JSON.parse(error.error);
      window.alert(error.message);
    })
  }
}

