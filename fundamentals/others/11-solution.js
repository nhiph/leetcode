function solution(unused) {
  const confirmed = {
    [`Solutions that do not follow the rules under "Rules" are given 0 points.`]: false,
  };

  return Object.values(confirmed).every((v) => !v);
}

console.log("solution", solution());
