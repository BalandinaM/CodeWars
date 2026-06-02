// const grow = x => x.reduce((mult, elem) =>  mult * elem, 1);
// console.log(grow([1, 2, 3, 4]));

// let car1 = {
//   maxSpeed: 200,
// }

// let car2 = {
//   maxSpeed: 260,
// }

// function showMaxSpeed() {
//   console.log('this', this)
//   console.log('this.maxSpeed', this.maxSpeed)
// }

// car1.f = showMaxSpeed //создаем методы, в них копируем ссылки на функцию
// car2.f = showMaxSpeed

// car1.f()
// car2.f()

// const bmw = {
//   brand: 'bmw',
//   speed: 200,
//   showMaxSpeed() {
//     console.log(this.speed)
//   },
// }

// const scooter = {
//   speed: 60,
// }

// const kia = {
//   speed: 150,
// }

// bmw.showMaxSpeed.call(scooter)
// bmw.showMaxSpeed.apply(scooter)
// bmw.showMaxSpeed.call(kia)
// bmw.showMaxSpeed.apply(kia)
// bmw.showMaxSpeed()

// const scooter = {
//   maxSpeed: 60,
// }

// const bike = {
//   maxSpeed: 180,
// }

// const car1 = {
//   maxSpeed: 200,
//   showMaxSpped() {
//     console.log(this.maxSpeed)
//   },
// }

// car1.showMaxSpped.bind(scooter).apply(bike)
// car1.showMaxSpped()

// const dialer = {
//   name: 'Toyota',
//   models: ['Yaris', 'Corolla', 'Prado'],
//   showModelsInDialer() {
//     this.models.forEach(model =>
//       console.log(`Dialer: ${this.name}, have: ${model}`)
//     )
//   },
// }

// dialer.showModelsInDialer()

// functionConstructor (name, [...models])  {
//   name: this.name;
//   models: [...models];
//   showModelsInDialer: function () {
//     this.models.forEach(model =>
//       console.log(`Dialer: ${this.name}, have: ${model}`)
//     )
//   };
// }

// function CarBrand(name, ...models) {
//   this.name = name
//   this.models = models
//   this.showModelsInDialer = function () {
//     this.models.forEach(model =>
//       console.log(`Dialer: ${this.name}, have: ${model}`)
//     )
//   }
// }

// const car = new CarBrand('Toyota', 'Yaris', 'Corolla', 'Prado')
// car.showModelsInDialer()

// const car2 = new CarBrand('Honda', 'Civic', 'Accord')
// car2.showModelsInDialer()

// const car3 = CarBrand()
// console.log(car3)

const dialer = {
  name: 'Toyota',
  models: ['Yaris', 'Corolla', 'Prado'],
  showModelsInDialer() {
    this.models.forEach(function (model) {
      console.log(`Dialer: ${this.name}, have: ${model}`)
    })
  },
}

dialer.showModelsInDialer.bind(dialer)
