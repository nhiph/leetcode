function solution(A) {
  if (A.length <= 2) return A.length;

  let max = 1;
  let left = 0;
  let right = 1;

  while (right < A.length) {
    if (
      right == A.length - 1 ||
      (A[right - 1] <= A[right] && A[right + 1] < A[right])
    ) {
      max = Math.max(max, right - left + 1);
      left = right;
      while (A[left - 1] >= A[left]) left--;
    }
    right++;
  }
  return max;
}

console.log(solution([2, 6, 8, 5])); // Output: 3
console.log(solution([1, 5, 5, 2, 6])); // Output: 4
console.log(solution([1, 5, 5, 5, 2, 6])); // Output: 5
console.log(solution([1, 1])); // Output: 2
console.log(solution([1, 2, 3, 4, 5])); // Output: 5
console.log(solution([5, 4, 3, 2, 1])); // Output: 5
console.log(solution([3, 1, 2, 4, 5, 3, 3, 2, 3, 4, 2, 1])); // Output: 6
