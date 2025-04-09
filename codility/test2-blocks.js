function solution(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === ">" && i !== S.length - 1) {
      continue;
    }
    if (i > 0 && S[i - 1] === ">" && S[i] === "<") {
      continue;
    }
    count++;
  }

  return count;
}

console.log(solution("><^v")); // 2
console.log(solution("<<^<v>>")); // 6
console.log(solution("><><")); // 0
console.log(solution(">><<")); // 0
console.log(solution("><><")); // 0
console.log(solution(">>>")); // 1
console.log(solution("<<<")); // 3
console.log(solution("<<>")); // 3
console.log(solution("<>>")); // 2
console.log(solution("<><")); // 1
