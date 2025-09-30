function oddOrEven(array) {
  let sum = array.reduce(function (acc, elem) {
    return acc + elem;
  }, 0);
  if (sum % 2 === 0 || sum === 0) {
    return  "even";
  } else {
    return  "odd";
  }
}

console.log(oddOrEven([0]));
