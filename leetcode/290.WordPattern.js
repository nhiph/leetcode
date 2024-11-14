var wordPattern = function (pattern, s) {
  let sStr = s.split(" ");

  if (pattern.length != sStr.length) return false;

  let patternMap = {};
  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.hasOwnProperty(pattern[i])) {
      if (patternMap[pattern[i]] != sStr[i]) return false;
      else continue;
    } else if (Object.values(patternMap).includes(sStr[i])) {
      return false;
    } else {
      patternMap[pattern[i]] = sStr[i];
    }
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
