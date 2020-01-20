import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder } from '@angular/forms';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  saveEmployeeForm;
  constructor(
    private usersService: EmployeeService,
    private forBuilder: FormBuilder) { 
    this.saveEmployeeForm = this.forBuilder.group({
      email: '',
      firstName: '',
      lastName: ''
    });
  }

  ngOnInit() {
  }
  saveEmployeeSubmit(employee: Employee) {
    this.usersService.saveEmployee(employee).subscribe(result => {
      window.alert("Your data is saved");
    },error => window.alert(error))
  }

}
