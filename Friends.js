function friend(friends){
  let myFriends = [];
  for (let elem of friends) {
    if (elem.length === 4) {
      myFriends.push(elem)
    } else {
      continue;
    }
  }
  return myFriends;
} 

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))