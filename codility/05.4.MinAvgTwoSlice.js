function solution(A) {
  let minAvg = Infinity;
  let minIdx = 0;
  let avg = Infinity;
  let prefixSum = 0;

  for (let a = 0; a < A.length; a++) {
    prefixSum = A[a];
    for (let b = a + 1; b < A.length && b - a + 1 <= 3; b++) {
      prefixSum += A[b];
      avg = prefixSum / (b - a + 1);
      if (minAvg > avg) {
        minAvg = avg;
        minIdx = a;
      }
    }
  }

  return minIdx;
}

console.log(solution([4, 2, 2, 5, 1, 5, 8]));
console.log(solution([10000, -10000, -10000, 10000]));
