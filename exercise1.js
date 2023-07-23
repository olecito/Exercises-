let side1 = 5;
let side2 = 6;
let side3 = 7;

let triangles = (side1 + side2 + side3) / 2;
let area = Math.sqrt(triangles * (triangles - side1) * (triangles - side2) * (triangles - side3));

console.log(area);