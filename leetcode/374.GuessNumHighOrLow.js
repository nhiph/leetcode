var guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (guess(mid) == 0) return mid;
    else if (guess(mid) == -1) right = mid - 1;
    else left = mid + 1;
  }

  return left;
};
