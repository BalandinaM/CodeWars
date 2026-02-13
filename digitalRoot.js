function digitalRoot(n) {
  const sum = n.toString()
    .split('')
    .reduce((acc, digit) => acc + Number(digit), 0);
  return sum > 9 ? digitalRoot(sum) : sum;
}