// function solveHanoi(n, from, to, square) {
//   if (n < 1) return;
//   if (n > 1) {
//     solveHanoi(n-1, from, square, to)
//   }
//   console.log(`move from ${from} to ${to}`)
//   if (n > 1) {
//     solveHanoi(n-1, from, square, to)
//   }
// }

function findNum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return "Not found";
}

// try another way with recursion

console.log(findNum([-3, -2, 1, 3, 4, 7, 9], 4));
console.log(findNum([-3, -2, 1, 3, 4, 7, 9], -2));
console.log(findNum([-3, -2, 1, 3, 4, 7, 9], 5));
