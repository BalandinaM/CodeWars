function multipleOfIndex(array) {
    return array.filter((el, index) => el % index === 0 || (index === 0 && el === 0))
}

console.log(multipleOfIndex([0,2,3,6,9]));
