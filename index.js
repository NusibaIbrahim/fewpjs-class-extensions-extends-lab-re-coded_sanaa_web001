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
polygon.countSides;
polygon.perimeter;

class Triangle extends Polygon {
  constructor(array) {
    super(array);
  }
  get isValid() {
    for (let index = 0; index < this.array.length; index++) {
      if (this.array[index] === 5) {
        return true;
      } else return false;
    }
  }
}
triangle = new Triangle([5, 5, 5]);
let triangle2 = new Triangle([15, 10, 1]);
triangle.countSides;
triangle.isValid;
triangle2.isValid;let circle;
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