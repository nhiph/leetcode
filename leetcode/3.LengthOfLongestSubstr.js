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

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring(" ")); // 1
// console.log(lengthOfLongestSubstring("aab")); // 2
// console.log(lengthOfLongestSubstring("dvdf")); // 3
var isDuplicate = (str) => {
  let charMap = {};

  for (let i = 0; i < str.length; i++) {
    charMap[str[i]] = (charMap[str[i]] || 0) + 1;
  }

  for (const key in charMap) {
    if (charMap[key] > 1) return true;
  }

  return false;
};
var lengthOfLongestSubstring2 = (s) => {
  let res = 0;
  for (let length = s.length; length >= 0; length--) {
    console.log("length", length);
    for (let start = 0; start <= s.length - length; start++) {
      console.log({ start, length });
      const checkStr = s.slice(start, start + length);
      console.log("checkStr", checkStr);
      if (!isDuplicate(checkStr)) {
        res = checkStr.length;
        return res;
      }
    }
  }
  return 0;
};

// console.log(lengthOfLongestSubstring2("abcb"));
// console.log(lengthOfLongestSubstring2("abcabcbb"));
// console.log(lengthOfLongestSubstring2("bbbbb"));
// console.log(lengthOfLongestSubstring2("pwwkew"));
// console.log(lengthOfLongestSubstring2(" ")); // 1
// console.log(lengthOfLongestSubstring2("aab")); // 2
// console.log(lengthOfLongestSubstring2("dvdf")); // 3

var lengthOfLongestSubstring3 = (s) => {
  if (s.length == 1) return 1

  let res = 0
  for (let i = 0; i < s.length; i++) {
      let pre = new Set()
      pre.add(s[i])
      for (let j = i + 1; j < s.length; j++) {
          if (pre.has(s[j])) {
              res = Math.max(pre.size, res)
              break
          } else {
              pre.add(s[j])
              res = Math.max(pre.size, res)
          }
      }
  }

  return res
};
console.log(lengthOfLongestSubstring3("abcb")); // 3
console.log(lengthOfLongestSubstring3("abcabcbb")); // 3
console.log(lengthOfLongestSubstring3("bbbbb")); // 1
console.log(lengthOfLongestSubstring3("pwwkew")); // 3
console.log(lengthOfLongestSubstring3(" ")); // 1
console.log(lengthOfLongestSubstring3("aab")); // 2
console.log(lengthOfLongestSubstring3("dvdf")); // 3
