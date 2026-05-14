// function score(dice) {
//   //   let count1 = 0
//   //   let count2 = 0
//   //   let count3 = 0
//   //   let count4 = 0
//   //   let count5 = 0
//   //   let count6 = 0
//   const counters = {
//     count1: 0,
//     count2: 0,
//     count3: 0,
//     count4: 0,
//     count5: 0,
//     count6: 0,
//   }

//   for (let i = 0; i <= dice.length; i++) {
//     // console.log(dice[i])
//     switch (dice[i]) {
//       case 1:
//         counters.count1 += 1
//         break
//       case 2:
//         counters.count2 += 1
//         break
//       case 3:
//         counters.count3 += 1
//         break
//       case 4:
//         counters.count4 += 1
//         break
//       case 5:
//         counters.count5 += 1
//         break
//       case 6:
//         counters.count6 += 1
//         break
//       default:
//         break
//     }
//   }
//   console.log(counters)

//   let score = 0

//   for (let key in counters) {
//     if (counters[key] >= 3) {
//       console.log(key)
//     }
//   }
// }

//console.log(score([4, 4, 4, 3, 3]))

function score(dice) {
  // Считаем частоту каждого значения (от 1 до 6)
  const counts = [0, 0, 0, 0, 0, 0]

  for (let i = 0; i < dice.length; i++) {
    counts[dice[i] - 1]++ // -1 потому что индекс 0 = единицам
  }

  let score = 0

  // Обрабатываем каждое значение от 1 до 6
  for (let value = 1; value <= 6; value++) {
    const count = counts[value - 1]
    const isTriplet = count >= 3

    if (isTriplet) {
      if (value === 1) {
        score += 1000 // три единицы
      } else {
        score += value * 100 // три двойки = 200, тройки = 300 и т.д.
      }

      // Оставшиеся кубики после тройки
      const remaining = count - 3

      // Добавляем одиночные (только для 1 и 5)
      if (value === 1) {
        score += remaining * 100
      } else if (value === 5) {
        score += remaining * 50
      }
    } else {
      // Нет тройки — считаем одиночные для 1 и 5
      if (value === 1) {
        score += count * 100
      } else if (value === 5) {
        score += count * 50
      }
    }
  }

  return score
}

console.log(score([4, 4, 4, 3, 3]))
