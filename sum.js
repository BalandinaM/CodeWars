function sum (numbers) {
    if (numbers.length === 0 ) {
        return 0
    } else {
       return numbers.reduce((acc, val) => acc+ val)
    }
}

console.log(sum([-2.398]));
