import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  squares = [0];
  counter = 1;
  createSquare() {
    this.squares.push(this.counter++);
  }

  removeElement(squareId: number) {
    this.squares = this.squares.filter((item) => {
      return item !== squareId;
    });
    this.counter--;
  }
}
