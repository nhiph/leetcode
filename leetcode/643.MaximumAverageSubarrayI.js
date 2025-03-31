// var findMaxAverage = function (nums, k) {
//   let maxSum = nums[0];
//   for (let i = 0; i < nums.length - k + 1; i++) {
//     let groupSum = 0;
//     for (let j = i; j < i + k; j++) {
//       groupSum += nums[j];
//     }
//     maxSum = Math.max(maxSum, groupSum);
//   }

//   return maxSum / k;
// };

var findMaxAverage2 = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }
  let max = sum;
  
  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k];
    sum += nums[i];
    max = Math.max(max, sum);
  }
  return max / k;
};

console.log(findMaxAverage2([1, 12, -5, -6, 50, 3], 4)); //12.75000
console.log(findMaxAverage2([5], 1)); //5.00000
