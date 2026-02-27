function findShort(s){
    let arr = s.split(' ').map(el=> el.length).sort((a, b) =>  a - b)
    return arr[0]
}

console.log(findShort("ProofOfWork Bitcoin ProofOfStake LiteCoin Bitcoin ProofOfStake Steem Ripple Factom Factom Ethereum Lisk Factom Dash ProofOfStake DarkCoin 21inc"));
