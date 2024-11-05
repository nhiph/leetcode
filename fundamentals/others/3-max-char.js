// 3. Max Char
// maxChar('abcccccdab') c  {a: 2; b: 2; c: 4, d: 1}
// maxChar('codingmoney') o, n,
// maxChar('apple 123111') 1

function maxChar(str) {
  let charMap = {};

  for (const char of str) {
    if (charMap[char]) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  let maxVal = 0;
  let maxChar = "";

  for (const [key, val] of Object.entries(charMap)) {
    if (maxVal < val) {
      maxVal = val;
      maxChar = key;
    }
  }

  return maxChar;
}

console.log("maxChar", maxChar("abcccccdab"));
console.log("maxChar", maxChar("codingmoney"));
console.log("maxChar", maxChar("apple 123111"));
