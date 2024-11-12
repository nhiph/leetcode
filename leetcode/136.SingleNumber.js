function singleNumber(nums) {
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]]) {
      numMap[nums[i]] += 1;
    } else {
      numMap[nums[i]] = 1;
    }
  }

  for (const key in numMap) {
    if (numMap[key] == 1) return Number(key);
  }
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
