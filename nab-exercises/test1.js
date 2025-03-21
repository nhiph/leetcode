// exercise 1
function findLargest(first, second, third) {
  let max = first;
  if (max < second) {
    max = second;
  }
  if (max < third) {
    max = third;
  }

  return max;
}

console.log(findLargest(-4, 2, -3));
console.log(findLargest(-4, -2, 1));

