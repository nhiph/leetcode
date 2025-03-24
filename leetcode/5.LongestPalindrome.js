var longestPalindrome = function (s) {
  let check = function (i, j) {
    let left = i;
    let right = j - 1;

    while (left < right) {
      if (s.charAt(left) !== s.charAt(right)) {
        return false;
      }

      left++;
      right--;
    }

    return true;
  };

  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start <= s.length - length; start++) {
      console.log({ start, length });
      if (check(start, start + length)) {
        return s.substring(start, start + length);
      }
    }
  }

  return "";
};

console.log(longestPalindrome("babad")); // bab, aba
// console.log(longestPalindrome('cbbd')) // bb
// console.log(longestPalindrome('ac')) // a
// console.log(longestPalindrome('aaaa')) // aaaa, a
// console.log(longestPalindrome('cbbd')) // bb
