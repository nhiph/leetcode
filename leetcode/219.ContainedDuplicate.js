var containsNearbyDuplicate = function (nums, k) {
  let numMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (numMap.hasOwnProperty(nums[i]) && i - numMap[nums[i]] <= k) {
      return true;
    } else {
      numMap[nums[i]] = i;
    }
  }

  return false;
};

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
