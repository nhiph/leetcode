// 4. chunk(array, size) {}
// chunk([1, 2, 3, 4], 2) [[1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) [[1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) [[1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) [[1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) [[1, 2, 3, 4, 5]]

function chunk(arr, size) {
  let res = [];
  let idx = 0;

  while (idx < arr.length) {
    res.push(arr.slice(idx, idx + size));
    idx += size;
  }

  return res;
}


console.log("chunk", chunk([1, 2, 3, 4], 2));
console.log("chunk", chunk([1, 2, 3, 4, 5], 2));
console.log("chunk", chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log("chunk", chunk([1, 2, 3, 4, 5], 4));
console.log("chunk", chunk([1, 2, 3, 4, 5], 10));