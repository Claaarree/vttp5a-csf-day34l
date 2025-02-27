import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  standalone: false,
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent implements OnInit{
  form!: FormGroup
  employee!: Employee

  constructor(private employeeSvc: EmployeeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: this.fb.control<string>(''),
      lastName: this.fb.control<string>(''),
      emailId: this.fb.control<string>('')
    })
  }

  protected postEmployee() {
    this.employee = this.form.value
    console.log(this.form.value)
    this.saveEmployee()
  }

  protected saveEmployee() {
    this.employeeSvc.create(this.employee)
    .subscribe((data) => console.log(data))
  }
}
