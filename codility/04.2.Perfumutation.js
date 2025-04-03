function solution(A) {
  let max = Math.max(...A);

  let set = new Set();
  for (let i = 1; i <= max; i++) {
    set.add(i);
  }

  console.log({ set, max });
  return set.size === A.length ? 1 : 0;
}

function solution1(A) {
  let max = Math.max(...A);

  let total = (max * (max + 1)) / 2;

  for (let i = 0; i < A.length; i++) {
    total -= A[i];
  }

  if (A.length > new Set(A).size) return 0;

  return total === 0 ? 1 : 0;
}

// console.log(solution1([1, 2, 3, 4])); // 1
// console.log(solution1([1, 3, 4])); // 0
// console.log(solution1([1, 3, 2])); // 1
console.log(solution1([1000000000])); // 0
console.log(solution1([9, 5, 7, 3, 2, 7, 3, 1, 10, 8]));
