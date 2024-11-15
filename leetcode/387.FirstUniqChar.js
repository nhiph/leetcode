var firstUniqChar = function (s) {
  let charMap = {};

  for (let char of s) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]] == 1) return i;
  }

  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
