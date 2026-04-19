function reverseWords(str) {
  let arr = str.split(' ')
  let newStr = ''
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      newStr += arr[i].split('').reverse().join('') + ' '
    } else {
      newStr += arr[i].split('').reverse().join('')
    }
  }
  return newStr
}

console.log(reverseWords('This is an example!'))
