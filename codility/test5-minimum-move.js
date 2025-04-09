function solution(A) {
  let map = {};
  for (const no of A) {
    map[no] = (map[no] || 0) + 1;
  }

  let moves = 0;
  for (const [num, freq] of Object.entries(map)) {
    if (num <= freq) {
      moves += freq - num;
    } else {
      moves += Math.min(Math.abs(freq), Math.abs(num - freq));
    }
  }

  return moves;
}

console.log(solution([1, 1, 3, 4, 4, 4])); // 3
console.log(solution([1, 2, 2, 2, 5, 5, 5, 8])); // 4
console.log(solution([1, 1, 1, 1, 3, 3, 4, 4, 4, 4, 4])); // 5
console.log(solution([10, 10, 10])); // 3
