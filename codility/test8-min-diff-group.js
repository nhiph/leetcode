function solution(A) {
  A.sort((a, b) => a - b);

  let result = Infinity;
  let n = A.length;
  let temp = 0;
  let temp2 = 0;
  let temp3 = 0;

  // 1 3 4 5 6 7 8 11 12
  for (let i = 0; i < n - 2; i++) {
    temp = A[i] - A[0];
    for (let j = i + 1; j < n - 1; j++) {
      temp2 = A[j] - A[i + 1];
      temp3 = A[n - 1] - A[j + 1];
      // result = Math.min(result, Math.max(Math.max(temp, temp2), temp3));
      result = Math.min(result, Math.max(temp, temp2, temp3));
    }
  }

  return result;
}

console.log(solution([11, 5, 3, 12, 6, 8, 1, 7, 4])); // 3
console.log(solution([10, 14, 12, 1000, 11, 15, 13, 1])); // 5
console.log(solution([4, 5, 7, 10, 10, 12, 12, 12])); // 2
console.log(solution([5, 10, 10, 5, 5])); // 0
