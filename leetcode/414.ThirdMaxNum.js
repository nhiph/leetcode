var thirdMax = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] < nums[j + 1]) {
        let tempVal = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = tempVal;
      }
    }
  }

  let newNums = new Set(nums);
  let [max1, max2, max3] = newNums;

  return newNums.size >= 3 ? max3 : max1;
};

// solution 2
var thirdMax2 = function (nums) {
  let max1 = (max2 = max3 = 0);

  for (let i of nums) {
    if (i > max1) {
      max3 = max2;
      max2 = max1;
      max1 = i;
    } else if (i > max2 && i < max1) {
      max3 = max2;
      max2 = i;
    } else {
      max3 = i;
    }
  }

  return max3;
};


console.log(thirdMax2([3,2,1]))
console.log(thirdMax2([2,1]))
console.log(thirdMax2([2,3,2,1]))