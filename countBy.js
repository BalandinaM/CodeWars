function countBy(x, n) {
  let z = [];
  let countItaration = x * n;
  for (let i = 1; i <= countItaration; i++) {
    if (i % x === 0) {
      z.push(i)
    }
  }
  return z;
}

console.log(countBy(2,5));

