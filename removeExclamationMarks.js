function removeExclamationMarks(s) {
let newStr = '';
for (let i = 0; i < s.length; i++) {    
    if (s[i] !== '!') {
        newStr += s[i]
    }
}
  return newStr;
}

console.log(removeExclamationMarks('H!ell!o W!orld!'));
