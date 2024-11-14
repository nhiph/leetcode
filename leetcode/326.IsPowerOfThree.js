var isPowerOfThree = function (n) {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 3 != 0) return false;
    n = n / 3;
  }

  return true;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(-2));
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(6));
console.log(isPowerOfThree(8));
