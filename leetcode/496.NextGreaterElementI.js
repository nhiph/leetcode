var nextGreaterElement = function (nums1, nums2) {
  // create map table for nums2 with key is num, val is next greater number
  let map = new Map();

  for (let cur = 0; cur < nums2.length; cur++) {
    let next = cur + 1;

    while (nums2[cur] > nums2[next] && next <= nums2.length - 1) {
      next++;
    }

    map.set(nums2[cur], nums2[next] || -1);
  }

  // iterator nums1 to get next greater number
  let res = [];

  for (const num of nums1) {
    res.push(map.get(num));
  }

  return res;
};

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
// console.log(nextGreaterElement([2, 4], [1, 2, 3, 4])); // [3, -1]

var nextGreaterElement2 = function (nums1, nums2) {
  const map = new Map(); // map for next greater element
  const stack = [];
  for (let num of nums2) {
    console.log("111", stack);
    while (stack.length && stack[stack.length - 1] < num) {
      // Pop elements from stack and update map with next greater element
      map.set(stack.pop(), num);
      console.log("MAP", map);
    }
    stack.push(num); // Push current element onto stack
    console.log("222", stack);
  }
  for (let i = 0; i < nums1.length; i++) {
    // Check if each element in nums1 has a next greater element in map
    nums1[i] = map.has(nums1[i]) ? map.get(nums1[i]) : -1; // Update element in nums1 with next greater element or -1
  }
  return nums1;
};

console.log(nextGreaterElement2([4, 1, 2], [1, 3, 4, 2])); // [-1, 3, -1]
// console.log(nextGreaterElement2([2, 4], [1, 2, 3, 4])); // [3, -1]
