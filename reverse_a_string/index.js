// 1st approach
function reverse1(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
}

console.log(reverse1("I love My India"));

// 2nd approach
function reverse2(str) {
  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

console.log(reverse2("I love My India"));

// 3rd approach
function reverse3(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

console.log(reverse3("I love My India"));
