function findUniq(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  return sortArr[0] !== sortArr[1] ? sortArr[0] : sortArr[sortArr.length - 1];
}

console.log(findUniq([0, 0, 1]));
//сортировкой, но как вычленить в конце или в начале окажется искомый элемент
//пройтись map и сравнить с предыдущим
//обычным циклом, как только нашел подходящий выйти из цикла
//
