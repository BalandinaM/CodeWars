function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }
    let n = 0;
    let s = 0;
    let w = 0;
    let e = 0;
    for (let i = 0; i < walk.length; i++) {
        console.log('!')
        if (walk[i] === 'n') {
            n += 1
        } else if (walk[i] === 's') {
            s += 1
        } else if (walk[i] === 'w') {
            w += 1
        } else if (walk[i] === 'e') {
            e += 1
        }
    }

    if ( n === s && w === e) {
        return true
    } else {
        return false
    }
}

console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e']));
