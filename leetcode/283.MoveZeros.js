var moveZeroes = function (nums) {
  let count = 0; // loop through ele
  let move = 0; // count the number 0 move to the last pos

  while (count < nums.length - move) {
    if (nums[count] == 0) {
      nums.splice(count, 1);
      nums.push(0);
      move++;
    } else {
      count++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
