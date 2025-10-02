function descendingOrder(n){
  let newNum = String(n).split('').map(elem => Number(elem)).sort().reverse().join('')
  return Number(newNum)
}

console.log(descendingOrder(111));