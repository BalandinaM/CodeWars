function arrayMash (array1, array2) {
  let newArray = [];
  for (i = 0; i < array1.length; i++) {
    newArray.push(array1[i])
    newArray.push(array2[i])
  }

  return newArray;
}

console.log(arrayMash(['h', 'l', 'o', 'o', 'l'], ['e', 'l', 'w', 'r', 'd']));