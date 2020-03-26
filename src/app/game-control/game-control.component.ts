import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  score: number = 0;
  start: any;
  @Output() numberAdded = new EventEmitter<{ newNumber: number }>();

  constructor() {}

  ngOnInit(): void {}

  startIncrement() {
    this.start = setInterval(() => {
      this.score += 1;
      this.numberAdded.emit({ newNumber: this.score });
    }, 1000);
  }

  endIncrement() {
    clearInterval(this.start);
  }
}
