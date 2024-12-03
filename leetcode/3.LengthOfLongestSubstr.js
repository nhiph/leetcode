var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length;
  let pre = (res = "");
  for (let i = 0; i < s.length; i++) {
    pre = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (pre.includes(s[j])) {
        res = pre.length > res.length ? pre : res;
        break; // break j loop
      } else {
        pre += s[j];
        res = pre.length > res.length ? pre : res;
      }
    }
  }

  return res.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" ")); // 1
console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring("dvdf")); // 3
