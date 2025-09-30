function likes(names) {
  let lengthArr = names.length;
  if (lengthArr === 0) {
    return "no one likes this"
  } else {
    if (lengthArr === 1) {
      return `${names[0]} likes this`;
    } else if (lengthArr === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (lengthArr === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (lengthArr >= 4) {
      return `${names[0]}, ${names[1]} and ${lengthArr - 2} others like this`;
    }
  }
}

console.log(likes(["Max", "John", "Mark"]));