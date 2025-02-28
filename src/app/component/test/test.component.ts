import { Component, OnInit } from '@angular/core';
import jsonData from '../../../assets/countries.json';

@Component({
  selector: 'app-test',
  standalone: false,
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit{

  data: any = jsonData
  countries: string[] = []

  canExit(): boolean {
    if (confirm('Do you want to leave this page?')) {
      return true
    } else {
      return false
    }
  }

  ngOnInit(): void {   
    console.log(jsonData)
    jsonData.forEach(data => this.countries.push(data.name))
  }
}
