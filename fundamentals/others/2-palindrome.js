// 2. Palindrome
// Palindrome('kayak') true
// Palindrome('madam') true
// Palindrome('coding') false

function reverse(str) {
  const newStr = str.toString();
  let res = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    res += newStr[i];
  }

  return res;
}

function palindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  // const reversedStr = reverse(str)
  return str === reversedStr;
}

console.log("palindrome", palindrome("kayak"));
console.log("palindrome", palindrome("madam"));
console.log("palindrome", palindrome("coding"));
