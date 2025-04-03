var nextGreaterElements = function (nums) {
  let res = [];

  let l = 0;
  let r = l + 1;

  for (let i = 1; i <= nums.length; i++) {
    if (nums[l] < nums[r]) {
      res.push(nums[r]);
      nums.push(nums.shift());
    } else {
      while (r < nums.length && res.length < nums.length) {
        if (r === nums.length - 1 && nums[r] <= nums[l]) {
          res.push(-1);
          nums.push(nums.shift());
          break;
        } else if (nums[l] >= nums[r]) {
          r++;
        } else {
          res.push(nums[r]);
          nums.push(nums.shift());
          break;
        }
      }
      r = 1;
    }
  }

  return res;
};

console.log(nextGreaterElements([1, 2, 1])); // [2,-1,2]
console.log(nextGreaterElements([1, 2, 3, 4, 3])); // [2,3,4,-1,4]
console.log(nextGreaterElements([5, 4, 3, 2, 1])); // [-1,5,5,5,5]
