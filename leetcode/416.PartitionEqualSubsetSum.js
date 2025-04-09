var canPartition = function (nums) {
  let sum = 0;
  for (const no of nums) {
    sum += no;
  }

  if (sum % 2 !== 0) return false;

  let target = sum / 2;
  nums.sort((a, b) => b - a);

  let i = 0;
  let subsetSum = 0;

  while (i < nums.length) {
    subsetSum += nums[i];
    
    if (subsetSum === target) {
      return true;
    } else if (subsetSum > target) {
      subsetSum -= nums[i];
      i++;
    } else {
      i++;
    }
  }
  return false;
};

console.log(canPartition([23, 13, 11, 7, 6, 5, 5]));
