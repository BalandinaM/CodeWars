function solution(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      newString += string[i]
    } else {
      newString += " " + string[i]
    }
  }
  return newString;
}

//можно было мапом
// const solution = string => {
//   return [...string].map((char) => {
//     return (char === char.toUpperCase()) ? ` ${char}` : char;
//   }).join('');
// }

console.log(solution("camelCasingTest"))