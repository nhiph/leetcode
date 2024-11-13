var isAnagram = function (s, t) {
  const sMap = {},
    tMap = {};
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = sMap.hasOwnProperty(s[i]) ? sMap[s[i]] + 1 : 1;
  }

  for (let j = 0; j < t.length; j++) {
    tMap[t[j]] = tMap.hasOwnProperty(t[j]) ? tMap[t[j]] + 1 : 1;
  }

  if (Object.keys(sMap).length != Object.keys(tMap).length) return false;

  for (itm of Object.entries(sMap)) {
    const [key, val] = itm;
    if (sMap[key] != tMap[key]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));
