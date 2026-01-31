// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

function permutations(string) {
    let arr = [];
    let length = string.length;
    let counterVar = (length - 1) * length;
    console.log(length);
    console.log('количество возможных вариантов: ', counterVar)
    // for (let i = 0; i < string.length; i++) {
    //     console.log(string[i]);
    //     let newElem = string[i];
    // }
	return [];
}

console.log(permutations('abc'))