var containsNearbyDuplicate = function (nums, k) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    if (seen.hasOwnProperty(nums[i]) && i - seen[nums[i]] <= k) {
      return true;
    } else {
      seen[nums[i]] = i;
    }
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
