var intersection = function (nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set();

  for (const n2 of nums2) {
    if (s1.has(n2)) s2.add(n2);
  }

  return Array.from(s2);
};

console.log(intersection([1, 2, 2, 1], [1, 2]));
console.log(intersection([2, 1], [1, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersection([4, 9, 5], [9, 8, 4]));
