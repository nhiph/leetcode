var isIsomorphic = function (s, t) {
  // badc, //baba
  // first splution
  let sMap = {}; // {b: 'b', a: 'a', d: 'b', c: 'a'}
  let tMap = {}; // {b: 'b', a: 'a',}
  for (let i = 0; i < s.length; i++) {
    if (
      (s[i] in sMap && sMap[s[i]] != t[i]) ||
      (t[i] in tMap && tMap[t[i]] != s[i])
    )
      return false;
    sMap[s[i]] = t[i];
    tMap[t[i]] = s[i];
  }

  return true;

  // second splution

  //   const charMap = {};
  //   for (let i = 0; i < s.length; i++) {
  //     const sc = s[i];
  //     const tc = t[i];
  //     if (charMap[sc]) {
  //       if (charMap[sc] !== tc) {
  //         return false;
  //       }
  //     } else if (Object.values(charMap).includes(tc)) {
  //       return false;
  //     }
  //     charMap[sc] = tc;
  //   }
  //   return true;
};

// console.log(isIsomorphic("paper", "title")); // true
// console.log(isIsomorphic("foo", "bar")); // false
// console.log(isIsomorphic("egg", "add")); // true
// console.log(isIsomorphic("badc", "baba")); // false

var isIsomorphic2 = function (s, t) {
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] && map[s[i]] !== t[i]) {
      return false;
    } else if (!map[s[i]] && Object.values(map).includes(t[i])) {
      return false;
    }
    map[s[i]] = t[i];
  }

  return true;
};

console.log(isIsomorphic2("paper", "title")); // true
console.log(isIsomorphic2("foo", "bar")); // false
console.log(isIsomorphic2("egg", "add")); // true
console.log(isIsomorphic2("badc", "baba")); // false
