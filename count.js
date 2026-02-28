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

//берем строку разбиваем ее на массив
//сортируем 

//созадем пустой объект
//начинаем перебирать строку
//проверяем наличие ключа в объекте
// если такой ключ есть добавляем к значению единицу
// если нет - добавляем новый ключ с значением 1