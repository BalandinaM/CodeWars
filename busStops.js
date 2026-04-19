var number = function (busStops) {
  let num1 = 0
  let num2 = 0
  for (let el of busStops) {
    num1 += el[0]
    num2 += el[1]
  }
  return num1 - num2
}

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
)
//10+3+5 = 18
//0+5+8= 13
//5
