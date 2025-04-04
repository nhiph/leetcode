function solution(A) {
  let missingNumber = 1;

  let set = new Set(A);

  while (set.has(missingNumber)) {
    missingNumber++;
  }

  return missingNumber;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-3, -1]));
