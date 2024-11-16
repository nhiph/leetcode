var longestPalindrome = function (s) {
  let charMap = {};
  for (let char of s) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  const vals = Object.values(charMap);

  let sums = 0;
  let isAllEven = true;

  for (let i = 0; i < vals.length; i++) {
    if (vals[i] % 2 == 0) sums += vals[i];
    else {
      isAllEven = false;
      sums += vals[i] - 1;
    }
  }

  return isAllEven ? s.length : sums + 1;
};
