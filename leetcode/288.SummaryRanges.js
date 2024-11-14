var summaryRanges = function (nums) {
  let res = [];

  let startIdx = 0;
  let endIdx = 0;

  while (endIdx < nums.length) {
    if (nums[endIdx + 1] - nums[endIdx] != 1) {
      let range = `${nums[startIdx]}->${nums[endIdx]}`;
      if (nums[startIdx] == nums[endIdx]) {
        range = `${nums[startIdx]}`;
      }
      res.push(range);
      startIdx = endIdx + 1;
    }
    endIdx = endIdx + 1;
  }

  return res;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
