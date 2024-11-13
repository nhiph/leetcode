var missingNumber = function (nums) {
  let n = nums.length;
  let sum = (n * (n + 1)) / 2;

  let totalNum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalNum += nums[i];
  }

  return sum - totalNum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
