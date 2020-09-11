import Circle from "./Circle.js";
import Point from "../ex1.2/Point.js";

let circle = new Circle(null , 5,  1,  2);
console.log(circle.toString());

let point = new Point(3,4)
let circle2 = new Circle(point , 5);
console.log(circle2.toString());
