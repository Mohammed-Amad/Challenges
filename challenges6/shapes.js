// challenge 17 : Module with Named Exports (Circle & Square)
import { PI } from './constant15.js'; 

export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return PI * this.radius * this.radius;
  }
}

export class Square {
  constructor(side) {
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
}