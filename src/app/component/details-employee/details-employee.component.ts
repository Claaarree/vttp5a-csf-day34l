import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-details-employee',
  standalone: false,
  templateUrl: './details-employee.component.html',
  styleUrl: './details-employee.component.css'
})
export class DetailsEmployeeComponent implements OnInit{

  employee!: Employee
  id!: number

  constructor(private employeeSvc: EmployeeService, private route: ActivatedRoute,
     private router: Router) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.employeeSvc.getById(this.id).subscribe({
      next: (data) => {this.employee = data},
      error: (error) => {console.log(error)}
    })
  }



}
