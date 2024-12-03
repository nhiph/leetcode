var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort((a, b) => a - b);

  let mid = (m + n) / 2;
  if ((m + n) % 2 == 0) return (nums1[mid - 1] + nums1[mid]) / 2;
  return nums1[Math.floor(mid)];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [2, 3]));
