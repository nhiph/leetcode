function solution(A, K) {
  let stack = A;

  for (let i = 1; i <= K; i++) {
    let peek = stack[stack.length - 1];
    stack.pop();
    stack.unshift(peek);
  }

  return stack;
}

function solution2(A, K) {
  for (let i = A.length - 1; i >= 0; i--) {
    A[i + K] = A[i];
  }

  for (let j = K - 1; j >= 0; j--) {
    A[j] = A.pop();
  }

  return A;
}

console.log(solution2([3, 8, 9, 7, 6], 3)); // [9,7,6,3,8]
console.log(solution2([0, 0, 0], 1)); // [0,0,0]
console.log(solution2([1, 2, 3, 4], 4)); // [1,2,3,4]
