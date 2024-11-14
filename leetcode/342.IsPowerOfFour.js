var isPowerOfFour = function (n) {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 4 != 0) return false;
    n = n / 4;
  }

  return true;
};

console.log(isPowerOfFour(64));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(-1));
console.log(isPowerOfFour(8));
