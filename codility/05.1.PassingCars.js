// Correctness but not performance
function solution(A) {
  let res = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] === 0 && A[j] === 1) {
        console.log({ i, j });
        res.push([i, j]);
      }
    }
  }

  return res.length ? res.length : -1;
}

// Performance
function solution2(A) {
  let res = 0;
  let zeroCount = 0;
  const max = 1000000000;

  for (const no of A) {
    if (no === 0) zeroCount++;
    else if (no === 1) {
      res += zeroCount;
      if (res >= max) return -1;
    }
  }

  return -1;
}

console.log(solution([0, 1, 0, 1, 1]));
