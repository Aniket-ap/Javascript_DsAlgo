function maxChar(string) {
  let charMap = {};
  let max = 0;
  let maxChar = "";
  for (let char of string) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  //   return charMap;
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChar("Hello There"));
