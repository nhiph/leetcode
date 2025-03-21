// solution 1
function find3largestNum(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  const [first, second, third] = nums;

  return [first, second, third];
}

// solution 2
function find3largestNum2(nums) {
  let group = new Set(nums);
  let max1 = Math.max(...group);
  group.delete(max1);
  let max2 = Math.max(...group);
  group.delete(max2);
  let max3 = Math.max(...group);

  return [max1, max2, max3];
}

console.log(find3largestNum2([10, 2, -1, 234, 22]));

// ??, ||, ? : 
// 0 || 2 && 10 => 10
// '' ?? 'Tinh' ? true : false
// const nhi = {name: 'nhi', age: '26'}, nhi.age+= 20 => 