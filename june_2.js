function arrayMash(array1, array2) {
  let newArr = []
  for (let i = 0; i < array1.length; i++) {
    newArr.push(array1[i])
    newArr.push(array2[i])
  }
  return newArr
}

console.log(arrayMash([1, 2, 3], ['a', 'b', 'c']))
