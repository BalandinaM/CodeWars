const areaOrPerimeter = function(l , w) {
  //сравнить 
  if (l === w) {
    return l * w
  } else {
    return (l+w)*2
  }
};

const areaOrPerimeter2 = (l,w) => l === w ? l*w : (l+w)*2

console.log(areaOrPerimeter2(9, 9));
