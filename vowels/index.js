// a e i o u
// vowels("Hi There") ===> 3
// vowels("why") ===> 0

function vowels(str) {
  let count = 0;
  const checker = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(vowels("Hi There!"));
console.log(vowels("why?"));
