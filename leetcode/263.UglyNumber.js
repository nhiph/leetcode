var isUgly = function (n) {
  if (n <= 0) return false;

  let primeFactors = [2, 3, 5];

  while (n > 1) {
    for (let i = 0; i < primeFactors.length; i++) {
      if (n % primeFactors[i] == 0) {
        n = n / primeFactors[i];
        break;
      } else {
        if (i == primeFactors.length - 1) return false;
        continue;
      }
    }
  }

  return true;
};

var isUgly1 = function (n) {
  if (n <= 0) return false;

  let primeFactors = [2, 3, 5];

  let i = 0;
  while (n > 1 && i < primeFactors.length) {
    if (n % primeFactors[i] == 0) {
      n /= primeFactors[i];
    } else i++;
  }

  return n == 1;
};

// console.log(isUgly(6));
// console.log(isUgly(14));
// console.log(isUgly(1));
// console.log(isUgly(-23341));
// console.log(isUgly(25));

console.log(isUgly1(6));
console.log(isUgly1(14));
console.log(isUgly1(1));
console.log(isUgly1(-23341));
console.log(isUgly1(25));
