let a = [1, 2, 3, 5, 8];

console.log(a.length);

console.log(a[5]);

console.log("Loop for printing elements");
for (x in a) {
  console.log(x);
}

console.log("Loop for adding elements in array");
let sum = 0;
for (x in a) {
  sum += a[x];
}
console.log(sum);

const ReturnsSum = (array) => {
  let sum = 0;
  for (x in a) {
    sum += a[x];
  }
  return sum;
};
console.log("Function for adding elements in array");
console.log(ReturnsSum(a));

a[8] = 55;
console.log(a[8]);

console.log(a.length);

console.log(a);

console.log(ReturnsSum(a));
