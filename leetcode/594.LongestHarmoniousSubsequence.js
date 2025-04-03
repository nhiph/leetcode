var findLHS = function (nums) {
  nums.sort((a, b) => a - b);

  let map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let next = val + 1;
    if (map[next]) {
      length = Math.max(length, map[val] + map[next]);
    }
  }

  return length;
};

// console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])); // 5
// console.log(findLHS([1, 2, 3, 4])); // 2
// console.log(findLHS([1, 1, 1, 1])); // 0

var findLHS1 = function (nums) {
  nums.sort((a, b) => a - b);

  let maxLength = 0;

  for (let left = 0; left < nums.length; left++) {
    let right = left + 1;
    let newLeft = left;

    while (nums[right] - nums[left] <= 1) {
      if (nums[right] === nums[left]) {
        newLeft = right;
      }
      if (nums[right] - nums[left] === 1) {
        maxLength = Math.max(maxLength, right - left + 1);
      }
      right++;
      if (right === nums.length) break;
    }

    left = newLeft;
  }

  return maxLength;
};

console.log(findLHS1([1, 3, 2, 2, 5, 2, 3, 7])); // 5
console.log(findLHS1([1, 2, 3, 4])); // 2
console.log(findLHS1([1, 1, 1, 1])); // 0
console.log(findLHS1([1, 4, 1, 3, 1, -14, 1, -13])); // 2
