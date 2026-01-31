// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

// 8 4 2 1

//Math.pow(число, степень);

const binaryArrayToNumber = arr => {
let arrWeight = [];
for (let i = arr.length; i > 0; i--) {
    let newEl = Math.pow(2, i-1)
    arrWeight.push(newEl)
}

 let tempArr = [];
if (arrWeight.length == arr.length) {
   
    for (let i = 0; i < arrWeight.length; i++) {
        console.log(arrWeight[i], arr[i])
        let newEl = arrWeight[i] * arr[i];
        tempArr.push(newEl)
    }
}
let res = tempArr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

return res;
};

console.log(binaryArrayToNumber([0, 1, 0, 1, 0, 1, 1]))