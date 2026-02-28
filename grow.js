const grow = x => x.reduce((mult, elem) =>  mult * elem, 1);
console.log(grow([1, 2, 3, 4]));
