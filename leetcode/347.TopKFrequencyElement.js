var topKFrequent = function (nums, k) {
  let map = new Map();
  for (const no of nums) {
    map.set(no, (map.get(no) || 0) + 1);
  }

  let bucket = [];

  for (const [num, freq] of map) {
    if (!bucket[freq]) {
      bucket[freq] = [];
    }
    bucket[freq].push(num);
  }

  let result = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (k == 0) break;
    if (!bucket[i]) continue;
    result.push(...bucket[i]);
    k -= bucket[i].length;
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
console.log(topKFrequent([1, 2, 2, 2, 3, 3, 3], 2));
