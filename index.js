let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let j = 0;
let t = 0;
let ayrma;
while (arr.length) {
  let son = arr.pop();
  if (son % 2 == 0) {
    j = j + son;
  } else {
    t = t + son;
  }
}
if (t > j) {
  ayrma = t - j;
} else {
  ayrma = j - t;
}
console.log(ayrma);
