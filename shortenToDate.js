function shortenToDate(longDate) {
  return  res = longDate.slice(0, longDate.indexOf(','));
}

console.log(shortenToDate("Friday May 2, 9am"));
