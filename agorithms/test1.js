function solution(P, S) {
  let people = 0;
  for (let i = 0; i < P.length; i++) {
    people += P[i];
  }

  S.sort((a, b) => a - b);
  let seat = 0;
  for (let i = 0; i < S.length; i++) {
    seat += S[i];

    if (seat > people) return i;
  }

  return seat + 1;
}

console.log(solution([1, 4, 1], [1, 5, 1])); // 2
console.log(solution([4, 4, 2, 4], [5, 5, 2, 5])); // 3
console.log(solution([2, 3, 4, 2], [2, 5, 7, 2])); // 2
