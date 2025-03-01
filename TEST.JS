function findLargestNum(arr) {
  let sortedArr = arr.sort((a, b) => a - b); // -3,1,2,3,5
  let postiveNum = arr.filter((num) => num > 0); //1,2,3,5
  let lastIdx = postiveNum.length - 1; // 3

  while (lastIdx >= 0) {
    if (sortedArr.includes(-postiveNum[lastIdx])) {
        return postiveNum[lastIdx];
    }
    else lastIdx--;
  }
  return 0;
}

console.log(findLargestNum([1, 2, 3, -3, 5]));
console.log(findLargestNum([1, ,1, 2, -1, 2, -1]));
console.log(findLargestNum([1, 2,3, -4]));

