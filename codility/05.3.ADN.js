function getNumber(char) {
  if (char === "A") return 1;
  else if (char === "C") return 2;
  else if (char === "G") return 3;
  return 4;
}

function solution(S, P, Q) {
  let result = [];
  for (let i = 0; i < P.length; i++) {
    let min = getNumber(S[P[i]]);
    for (let j = P[i] + 1; j <= Q[i]; j++) {
      if (min == 1) break;
      let number = getNumber(S[j]);
      if (min > number) min = number;
    }
    result.push(min);
  }
  return result;
}

function solution2(S, P, Q) {
    // 
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));

function solution1(S, P, Q) {
  // Implement your solution here
  let map = new Map([
    ["A", 1],
    ["C", 2],
    ["G", 3],
    ["T", 4],
  ]);

  let loop = [];
  for (let i = 0; i < P.length; i++) {
    loop.push([P[i], Q[i]]);
  }

  let result = [];

  for (const [start, end] of loop) {
    if (start === end) {
      result.push(map.get(S[start]));
      continue;
    }

    let min = Infinity;
    for (let i = start; i <= end; i++) {
      min = Math.min(min, map.get(S[i]));
    }

    result.push(min);
  }

  return result;
}
