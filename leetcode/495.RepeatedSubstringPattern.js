var repeatedSubstringPattern = function (s) {
  if (s.length < 2) return false;

  let n = s.length;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) {
      let sub = s.slice(0, i);
      let repeat = "";
      for (let j = 0; j < n / i; j++) {
        repeat += sub;
      }
      if (repeat === s) return true;
    }
  }

  return false;
};
