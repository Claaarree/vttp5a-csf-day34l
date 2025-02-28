import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit{
  form!: FormGroup
  id!: number
  employee = new Employee()

  constructor(private employeeSvc: EmployeeService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailId: new FormControl('')
    })
    this.id = this.route.snapshot.params['id']
    console.log(this.id)

    this.employeeSvc.getById(this.id)
    .subscribe({
      next: (data) => {
        this.employee = data
        console.log(this.employee)
        this.form.patchValue(this.employee)  
      },
      error: (error) => {
        console.log(error)
      }
    })
  }



  protected updateEmployee() {
    this.employeeSvc.updateById(this.id, this.employee)
      .subscribe((data: any) => {this.router.navigate(['/employeeList'])},
        (error: any) => console.log(error))
  }
}
