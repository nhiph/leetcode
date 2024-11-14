var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let tempLeft = s[left];
    s[left] = s[right];
    s[right] = tempLeft;

    left++;
    right--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
