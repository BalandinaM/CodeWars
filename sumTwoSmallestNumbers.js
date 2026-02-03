function sumTwoSmallestNumbers(numbers) {
    let firstMin = Infinity;
    let secondMin = Infinity;
    
    for (let num of numbers) {
        if (num < firstMin) {
            secondMin = firstMin;
            firstMin = num;
        } else if (num < secondMin) {
            secondMin = num;
        }
    }
    
    return firstMin + secondMin;
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
