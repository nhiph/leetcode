var maxSlidingWindow = function (nums, k) {
  let q = [];
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    while (q[q.length - 1] < nums[i]) {
      q.pop();
    }

    q.push(nums[i]);

    if (q[0] === nums[i - k]) {
      q.shift();
    }

    if (i >= k - 1) {
      res.push(q[0]);
    }
  }

  return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
