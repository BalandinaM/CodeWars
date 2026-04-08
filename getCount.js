function getCount(str) {
    let letters = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (let char of str) {
        for (let letter of letters) {
            if (char === letter) {
                count += 1
            }
        }
    }
  return count;
}

console.log(getCount("eborocadoabiu"));
// a, e, i, o, u