function findOdd(arr) {
  arr.sort((a, b) => a - b);
  let count = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (count % 2 !== 0) {
        return arr[i - 1];
      }
      count = 1;
    }
  }
  
  return arr[arr.length - 1];
}
console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
