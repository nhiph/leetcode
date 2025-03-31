/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const neededChars = {};

  for (let char of t) {
    neededChars[char] = (neededChars[char] || 0) + 1;
  }

  let left = 0;
  let right = 0;
  let neededLength = Object.keys(neededChars).length;
  let substring = "";

  while (right < s.length) {
    const rightChar = s[right];
    console.log("rightChar", rightChar);
    neededChars[rightChar]--;
    if (neededChars[rightChar] === 0) neededLength--;

    console.log("neededChars", neededChars);
    console.log("neededLength", neededLength);

    while (neededLength === 0) {
      if (!substring || substring.length > right - left + 1) {
        substring = s.slice(left, right + 1);
      }

      const leftChar = s[left];
      if (neededChars[leftChar] === 0) {
        neededLength++;
      }
      neededChars[leftChar]++;
      left++;
    }

    right++;
  }

  return substring;
};

// console.log(minWindow("abc", "ac"));
// console.log(minWindow("aa", "a"));
// console.log(minWindow("a", "a"));
console.log(minWindow("ADOBECODEBANC", "ABC"));
