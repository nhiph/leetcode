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
