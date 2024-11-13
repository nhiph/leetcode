var isPowerOfTwo = function (n) {
  if (n <= 0) return false;

  while (n > 1) {
    if (n % 2 != 0) return false;

    n = n / 2;
  }

  return true;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(-16));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(8));
