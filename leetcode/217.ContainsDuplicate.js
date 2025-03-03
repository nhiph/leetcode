var containsDuplicate = function (nums) {
  const newNums = new Set(nums);
  return newNums.size !== nums.length;
};

// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

var containsDuplicate2 = (nums) => {
  const seen = new Set();
  for (const num of nums) {
    console.log({ num, seen });
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
};

var containsDuplicate3 = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i-1]) return true
  }
  return false
};

console.log(containsDuplicate3([1, 2, 3, 4]));
console.log(containsDuplicate3([1, 2, 3, 1]));
console.log(containsDuplicate3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
