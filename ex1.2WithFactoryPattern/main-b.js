import Circle from "./Circle.js";
import Point from "./Point.js";

let point1 = new Point(1, 2);
let point2 = new Point(3, 4);
let point3 = new Point(5, 6);

let circle1 = new Circle(point1, 7);
let circle2 = new Circle(point2, 8);
let circle3 = new Circle(point3, 9);

let circles = [circle1, circle2, circle3];

let radiuses = circles.map((x) => x.radius);

console.log(radiuses);
