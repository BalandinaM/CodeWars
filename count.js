function count(string) {
  let obj = {}
  for (i = 0; i < string.length; i++ ) {
    if (Object.hasOwn(obj, `${string[i]}`)) {
        obj[string[i]] = obj[string[i]] + 1
    } else {
        obj[string[i]] = 1
    }
  }
  return obj;
}

console.log(count('ababhrjsasdfwen'));