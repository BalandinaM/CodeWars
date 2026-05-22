function sumTwoSmallestNumbers(numbers) {
  let newArr = numbers.sort((a, b) => a - b)
  return newArr[0] + newArr[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))
