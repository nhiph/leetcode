// https://leetcode.com/problems/two-sum/?envType=problem-list-v2&envId=array


function twoSum(arr, target) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result = [i, j];
        break;
      }
    }
  }

  return result;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([5, 2, 3, 7, 15], 9));
console.log(twoSum([3, 2, 4], 6));
