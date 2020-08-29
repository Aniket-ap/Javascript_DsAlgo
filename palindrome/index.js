function palindrome(str){
    let reversed = str.split('').reverse().join('')

    return reversed === str
}

console.log(palindrome("RACECAR")) // TRUE
console.log(palindrome("INDIA"))   // FALSE

// 2nd approach

function __palindrome(str){
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

console.log(__palindrome("RACECAR")) // TRUE
console.log(__palindrome("INDIA"))   // FALSE