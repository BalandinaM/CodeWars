function arrayDiff(a, b) {
  const newArr = a.filter((a) => {
    let isDiff = b.includes(a)
    if (!isDiff) {
        return a
    } 
})

return newArr;
}
// function arrayDiff(a, b) {
//   return a.filter(item => !b.includes(item));
// }

// const arrayDiff = (a, b) => a.filter(item => !b.includes(item));


console.log(arrayDiff([1,2,2,2,3,4], [2,4]));
