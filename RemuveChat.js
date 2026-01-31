// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr' 
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 3);

// console.log(arr);


function removeChar(str){
   let arr = str.split('')
   arr.splice(0,1);
   arr.splice(arr.length-1, 1);
   let newStr = arr.join('');
return newStr;
};

console.log(removeChar('eloquent'))