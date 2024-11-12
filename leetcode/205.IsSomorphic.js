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

console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("badc", "baba"));
