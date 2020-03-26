import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  numberRecieved(number: { newNumber: number }) {
    number.newNumber % 2 === 0
      ? this.evenNumbers.push(number.newNumber)
      : this.oddNumbers.push(number.newNumber);
    console.log("New number recieved: ", number.newNumber);
  }
}
