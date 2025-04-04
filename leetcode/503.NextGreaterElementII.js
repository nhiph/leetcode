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

var nextGreaterElements2 = function (nums) {
  let numsLength = nums?.length;

  let stack = [];
  let result = new Array(numsLength).fill(-1);

  for (let i = 0; i < 2 * numsLength; i++) {
    let curIdx = i % numsLength;
    let curVal = nums[curIdx];

    while (stack.length && nums[stack[stack.length - 1]] < curVal) {
      result[stack.pop()] = curVal;
    }

    if (i < numsLength) stack.push(i);
  }

  return result;
};

console.log(nextGreaterElements2([1, 2, 3])); // [2,3,-1]
console.log(nextGreaterElements2([1, 2, 1])); // [2,-1,2]
console.log(nextGreaterElements2([1, 2, 3, 4, 3])); // [2,3,4,-1,4]
console.log(nextGreaterElements2([5, 4, 3, 2, 1])); // [-1,5,5,5,5]
