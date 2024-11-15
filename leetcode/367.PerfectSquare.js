var isPerfectSquare = function (num) {
  let left = 1;
  let right = num;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = Math.pow(mid, 2);

    if (square == num) return true;
    else if (square > num) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

console.log(isPerfectSquare(1));
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(16));
