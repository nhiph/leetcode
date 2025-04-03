//  TapeEquilibrium: https://app.codility.com/programmers/lessons/3-time_complexity/


// function solution(A) {
//   // Implement your solution here
//   let l = 0;
//   let r = A.length - 1;
//   let diff = 0;

//   while (l < r) {
//     if (A[l] === A[r]) {
//       l++;
//       r--;
//     } else if (A[l] < A[r]) {
//       diff = A[r] - A[l];
//       A[r] = diff;
//       l++;
//       console.log("1111", { l, r, diff });
//     } else if (A[l] > A[r]) {
//       diff = A[l] - A[r];
//       A[l] = diff;
//       r--;
//       console.log("2222", { l, r, diff });
//     }
//   }

//   return diff;
// }

function solution(A) {
  // Implement your solution here
  let sumA = 0;
  for (const no of A) {
    sumA += Number(no);
  }

  let min = Infinity;
  let sum1 = 0;

  for (let p = 0; p < A.length - 1; p++) {
    sum1 += A[p];
    let value = Math.abs(sumA - 2 * sum1);
    min = Math.min(min, value);
  }

  return min;
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([-3, -4, -5, 1, 2, 3]));
