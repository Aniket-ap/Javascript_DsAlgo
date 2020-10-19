function anagrams(string1, string2) {
  const aCharMap = buildCharmap(string1);
  const bCharMap = buildCharmap(string2);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharmap(str) {
  let charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

console.log(anagrams("cat", "act"));
console.log(anagrams("Rail Safety!!", "Fairy Tales"));
console.log(anagrams("Hye There", "Buy There"));
