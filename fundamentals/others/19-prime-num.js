function isPrimeNum(n) {
  if (n <= 1) return false;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrimeNum(4));
console.log(isPrimeNum(2));
console.log(isPrimeNum(3));
console.log(isPrimeNum(1));
console.log(isPrimeNum(17));
