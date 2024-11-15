var isSubsequence = function (s, t) {
  let subStr = "";
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    while (j < t.length) {
      if (s[i] == t[j]) {
        subStr += s[i];
        j = j + 1;
        break;
      }
      j = j + 1;
    }
    if (j == t.length) {
      break;
    }
  }

  return subStr == s;
};

console.log(isSubsequence("abc", "habgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("abc", "habgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
