var canConstruct = function (ransomNote, magazine) {
  let charMap = {};

  for (let char of magazine) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let charCheck of ransomNote) {
    if (!charMap[charCheck] || charMap[charCheck] <= 0) {
      return false;
    } else {
      charMap[charCheck]--;
    }
  }

  return true;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "aab"));
console.log(canConstruct("aa", "ab"));
