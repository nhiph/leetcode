var strStr = function (haystack, needle) {
  for (var i = 0; i < haystack.length; i++) {
    for (var q = 0; q < needle.length; q++) {
      if (haystack[i + q] !== needle[q]) {
        break;
      }
      if (q === needle.length - 1) {
        return i;
      }
    }
  }
  return -1;
};


console.log(strStr("sadbutsad", "sad"))
console.log(strStr("tuilanhi", "nhi"))
console.log(strStr("leetcode", "leeto"))