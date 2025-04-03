// OddOccurrencesInArray: https://app.codility.com/programmers/lessons/2-arrays/


function solution(A) {
  if (A.length === 1) return A[0];

  let set = new Set();

  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) {
      set.delete(A[i]);
    } else {
      set.add(A[i]);
    }
  }
  return set.keys().next().value;
}

console.log(solution([1, 3, 1, 3, 5, 7, 7]));
