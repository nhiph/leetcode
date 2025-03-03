var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] == nums[i]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left - 1] == nums[left] && left < right) {
          left++;
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 0, 0, 0]));
