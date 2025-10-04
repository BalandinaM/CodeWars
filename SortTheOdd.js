function sortArray(arr) {
    const oddNumbers = arr.filter(num => num % 2 !== 0);
    
    oddNumbers.sort((a, b) => a - b);
    
    const result = [];
    let oddIndex = 0; 
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(oddNumbers[oddIndex]);
            oddIndex++;
        } else {
            result.push(arr[i]);
        }
    }
    
    return result;
}



console.log(sortArray([5, 8, 6, 3, 4, 7, 9]))