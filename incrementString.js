// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//  && arr[i] != 0

// arr[i] == Number(arr[i])

// function incrementString(str) {
//   let arr = str.split('');
// //   console.log(arr);
//   let newStr = '';
//   let numLength = 0;
//   let num = '';
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

//     if (arr[i] != Number(arr[i]) ) {
//         return str + 1;
//     } else if (!isNaN(arr[i])) {
//         // console.log('number:', arr[i] )
//         num += arr[i];
//         numLength += 1;
//     } else {
//         newStr += arr[i];
//     }
//   }
//   console.log(numLength)
//   console.log(num)
//   console.log(newStr)
//   let increment = +num + 1
//   return (newStr + increment)
  
// }

// console.log(incrementString("foo099"))

function incrementString(str) {
  let numbers = '';
  let letters = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] >= '0' && str[i] <= '9') {
      numbers = str[i] + numbers;  
    } else {
      letters = str.slice(0, i + 1); 
      break;
    }
  }
  
 
  if (numbers === '') {
    return str + '1';
  }
  
  let num = parseInt(numbers);
  num++;  
  
  let newNum = num.toString();
  

  while (newNum.length < numbers.length) {
    newNum = '0' + newNum;
  }
  
  return letters + newNum;
}

console.log(incrementString("foo099"))