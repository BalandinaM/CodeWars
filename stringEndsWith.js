function solution(str, ending) {
  let sub = str.substr(-ending.length, ending.length);
  return sub === ending ? true : false;
}

console.log(solution("abcde", "cde"));
