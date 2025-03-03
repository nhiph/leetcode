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

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([5, 2, 3, 7, 15], 9));
// console.log(twoSum([3, 2, 4], 6));

var twoSum2 = (arr, targets) => {
  // keep val & index
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    myArr.push([arr[i], i]);
  }

  // sort Arr
  myArr.sort((a, b) => a[0] - b[0]);

  // compare sum with target
  let left = 0;
  let right = myArr.length - 1;

  while (left < right) {
    let sum = myArr[left][0] + myArr[right][0];
    if (sum == targets) {
      return [myArr[left][1], myArr[right][1]];
    } else if (sum < targets) left++;
    else {
      right--;
    }
  }

  return [];
};

// console.log(twoSum2([2, 7, 11, 15], 9)); // 0,1
// console.log(twoSum2([5, 2, 3, 7, 15], 9)); // 1,3
// console.log(twoSum2([3, 2, 4], 6)); // 1,2

var twoSum3 = (arr, targets) => {
  let indices = {};
  for (let i = 0; i < arr.length; i++) {
    indices[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    let diff = targets - arr[i];
    if (indices[diff] && indices[diff] !== i) {
      return [i, indices[diff]];
    }
  }

  return [];
};
// console.log(twoSum3([3, 2, 4], 6));

var twoSum4 = (nums, target) => {
  const prevMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }

    prevMap.set(nums[i], i);
    console.log('pre', prevMap)
  }

  return [];
};

console.log(twoSum4([3, 2, 4], 6));
