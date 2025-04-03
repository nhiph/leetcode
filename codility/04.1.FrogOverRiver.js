function solution(X, A) {
  // Implement your solution here
  let pos = new Set();
  for (let i = 1; i <= X; i++) {
    pos.add(i);
  }

  for (let i = 0; i < A.length; i++) {
    if (pos.has(A[i])) {
      pos.delete(A[i]);

      if (pos.size === 0) {
        return i;
      }
    }
  }

  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4])); // 6
console.log(solution(9, [1, 1, 3, 7, 4, 9, 8, 6, 5, 1, 1, 2, 7, 3])); // 11
