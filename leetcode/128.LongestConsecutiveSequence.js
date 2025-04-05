var longestConsecutive = function (nums) {
  let map = {};
  for (const no of nums) {
    map[no] = (map[no] || 0) + 1;
  }

  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let len = 1;
    let next = cur + 1;

    while (map[next]) {
      next++;
      len++;
    }

    max = Math.max(max, len);
  }

  return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 0, 1, 2]));
