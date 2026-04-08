function betterThanAverage(classPoints, yourPoints) {
  let newArr = [...classPoints, yourPoints]
  let gpa = newArr.reduce((acc, val) => acc+ val)/newArr.length
  return gpa < yourPoints
}


console.log(betterThanAverage([2, 3], 1));
