var isMonotonic = function (nums) {
  let isIncrease = nums[0] <= nums[nums.length - 1];

  for (let i = 0; i < nums.length; i++) {
    if (isIncrease && nums[i + 1] < nums[i]) {
      return false;
    } else if (!isIncrease && nums[i] < nums[i + 1]) {
      return false;
    } else if (nums[i] == nums[i + 1]) {

    }
  }

  return true;
};

// console.log(isMonotonic([1, 2, 2, 3]));
// console.log(isMonotonic([6, 5, 4, 4]));
// console.log(isMonotonic([1, 3, 2]));
// console.log(isMonotonic([1, 1, 2]));
// console.log(isMonotonic([1, 1, -1]));
