// function solution(N, A) {
//   let counters = new Array(N).fill(0);

//   for (let i = 0; i < A.length; i++) {
//     const val = A[i];

//     if (val >= 1 && val <= N) {
//       counters[val - 1] = counters[val - 1] + 1;
//     } else if (val === N + 1) {
//       counters.fill(Math.max(...counters));
//     }
//   }

//   return counters;
// }

function solution(N, A) {
  let counters = new Array(N).fill(0);
  let maxCounter = 0;
  let lastMaxUpdate = 0;

  for (let i = 0; i < A.length; i++) {
    const val = A[i];

    if (val >= 1 && val <= N) {
      if (counters[val - 1] < lastMaxUpdate) {
        counters[val - 1] = lastMaxUpdate;
      }
      counters[val - 1] += 1;
      maxCounter = Math.max(maxCounter, counters[val - 1]);
    } else if (val === N + 1) {
      lastMaxUpdate = maxCounter;
    }
  }

  console.log("lastMaxUpdate", lastMaxUpdate);

  for (let i = 0; i < N; i++) {
    if (counters[i] < lastMaxUpdate) {
      counters[i] = lastMaxUpdate;
    }
  }

  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4])); // [3,2,2,4,2]
console.log(solution(2, [1, 2, 3, 1, 2])); // [2,2]
console.log(solution(1, [1, 0, 1])); // [2]
console.log(solution(1, [1, 0, 2])); // [1]
