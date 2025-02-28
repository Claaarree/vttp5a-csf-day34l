import { Component, OnInit } from '@angular/core';
import { from, map, tap } from 'rxjs';

@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent implements OnInit{
  numbersArray = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  
  // subcribe will print out the data once the function is called
  multiplyBy3() {
    this.numbersArray.pipe(
      map(data => {data * 3})
    ).subscribe(data => {console.log(data)})
  }
  
  foodArray = from(["Pizza", "Burger", "Sandwich", "Pasta", "Biryani"])

  toUpperCase() {
    this.foodArray.pipe(
      map(data => data.toUpperCase())
    ).subscribe(data => console.log(data))
  }

  nameArray = from([
    {fname: "John", lname: "Denver"},
    {fname: "Joe", lname: "Smith"},
    {fname: "Will", lname: "Smith"}
  ])

  concatenateToFullName() {
    this.nameArray.pipe(
      map(data => data.fname.concat(" ", data.lname))
    ).subscribe(data => console.log(data))
  }

  numberSeries = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  sumOfNumbers() {
    this.numberSeries
      .pipe(tap(data => console.log("Tapping: " + (data + 1))))
      .subscribe(data => console.log("Subscribe: " + data))
  }

  mapAndtap() {
    this.numberSeries
      .pipe(
        tap(data => console.log("Before change: " + data)),
        map(data => data * 3),
        tap(data => console.log("After changing: " + data))
      )
      .subscribe(data => console.log("Subscribe: " + data))
  }

  constructor() {}

  ngOnInit(): void {
    // this.multiplyBy3()
    // this.sumOfNumbers()
    this.mapAndtap()
  }

}
