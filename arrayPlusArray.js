function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce(function (sum, elem) {
    return sum + elem;
  }, 0);
}

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
