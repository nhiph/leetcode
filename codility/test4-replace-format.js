function solution(S) {
  let map = {};
  for (const char of S) {
    map[char] = (map[char] || 0) + 1;
  }

  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (map["A"] > 0 && S[i] === "B") {
      count++;
    } else if (S[i] === "A") {
      map["A"]--;
    }
  }

  return count;
}

console.log(solution("BAAABAB")); // 2
console.log(solution("BBABAA")); // 3
console.log(solution("AABBBB")); // 0
