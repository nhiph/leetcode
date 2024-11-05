function factorialize(n) {
  if (n === 1 || n === 0) return 1;
  for (var i = n - 1; i > 1; i--) {
    console.log("i", i);
    n *= i;
  }
  return n;
}

// function factorialize(n) {
//     var result = 1;
//     for (var i = 2; i <= n; i++) {
//         result = result*i;
//     }
//     return result;
// };

console.log(factorialize(2)); // 2
console.log(factorialize(3)); // 6
console.log(factorialize(4)); // 24
console.log(factorialize(5)); // 120
