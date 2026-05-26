function findOdd(arr) {
  const count = {}
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1
  }
  for (let num in count) {
    if (count[num] % 2 !== 0) return Number(num)
  }
}

console.log(findOdd([0, 1, 0, 1, 0]))
