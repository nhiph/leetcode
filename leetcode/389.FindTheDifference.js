var findTheDifference = function (s, t) {
  let charMap = {};

  for (let char of s) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!charMap[t[i]]) return t[i];
    else {
      charMap[t[i]]--;
    }
  }

  return "";
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "a"));
console.log(findTheDifference("a", "aa"));
