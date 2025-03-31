var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = new Array(nums.length).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[i] = nums[left] ** 2;
      left++;
    } else {
      res[i] = nums[right] ** 2;
      right--;
    }
  }

  return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10])); // [0,1,9,16,100]
console.log(sortedSquares([-7, -3, 2, 3, 11])); // [4,9,9,49,121]
// console.log(sortedSquares())
// console.log(sortedSquares())
// console.log(sortedSquares())
