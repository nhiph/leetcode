// f(2) => [0, 1]
// f(3) => [0,1, 1]
// f(7) => [0, 1, 1, 2, 3, 5, 8]

function fibonacci(n) {
  var fibo = [0, 1];
  for (var i = 2; i < n; i++) {
    const num = fibo[i - 2] + fibo[i - 1];
    fibo.push(num);
    // fibo[i] = fibo[i-1] + fibo[i-2]
  }
  return fibo;
}

console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(20));
