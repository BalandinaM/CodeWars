function arrayDiff(a, b) {
  return a.filter((a) =>  !b.includes(a))
}

console.log(arrayDiff([18,4,-6,-13,-19,0,9,-8,-14,11,-11,-19,-16],[]));
