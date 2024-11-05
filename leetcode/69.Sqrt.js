/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // if (x < 2) return x;
  // for (let i = 1; i < x; i++) {
  //     if (i * i > x) return i - 1;
  // }
  // return 1;

  let left = 0;
  let right = x;
  if (x <= 1) {
    return x;
  }
  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    let square = middle * middle;
    if (square === x) return middle;
    if (square < x) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return left - 1;
};
