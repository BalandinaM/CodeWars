//
function filter_list(arr) {
  return arr.filter(el => typeof el === 'number')
}

//console.log(filter_list([1, 2, 'a', 'b', 5, 's']))

function descendingOrder(n) {
  let newStr = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
  return Number(newStr)
}

console.log(descendingOrder(42145))
