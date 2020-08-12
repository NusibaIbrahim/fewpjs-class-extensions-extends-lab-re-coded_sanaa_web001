// Your code here

let circle;
let triangle;
let square;

class Polygon {
  constructor(array) {
    this.array = array;
  }

  get countSides() {
    return this.array.length;
  }
  get perimeter() {
    let sum = 0;
    for (let index = 0; index < this.array.length; index++) {
      sum += this.array[index];
    }
    return sum;
  }
}
let polygon = new Polygon([5, 5, 5]);
console.log(polygon.countSides);
console.log(polygon.perimeter);