// function solution(string) {
//   let res = ''
//   for (let i = 0; i < string.length; i++) {
//     console.log(string[i])
//     if (string[i] === string[i].toLowerCase()) {
//       res += string[i]
//     } else {
//       res += ` ${string[i]}`
//     }
//   }
//   return res
// }

// function solution(string) {
//   let res = ''
//   string.split('').map(char => {
//     console.log(char)
//     return char === char.toLowerCase() ? (res += char) : (res += ` ${char}`)
//   })

//   return res
// }

function solution(string) {
  return string.split('').reduce((acc, char, index) => {
    if (char !== char.toLowerCase() && index !== 0) {
      return (acc += ` ${char}`)
    } else {
      return (acc += char)
    }
  }, '')
}

console.log(solution('camelCasing'))
