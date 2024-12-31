const findIndx = (sortedStrArr, searchStr) => {
  let left = 0;
  let right = sortedStrArr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    console.log("mid", { mid, left, right });
    if (sortedStrArr[mid] === searchStr) {
      console.log("ifff");
      return mid;
    } else if (sortedStrArr[mid] > searchStr) {
      right = mid - 1;

      console.log("ELSE IF");
    } else {
      console.log("ELSE");
      left = mid + 1;
    }
  }

  return -1;
};

// console.log(findIndx(['a', 'ab', 'abc', 'b','bd', 'c'], 'abc'));
// console.log(findIndx(['a', 'ab', 'abc', 'b','bd', 'c'], 'adc'));
console.log(findIndx(["a", "ab", "abc", "b", "bd", "c"], "c"));
// console.log(findIndx(['a', 'ab', 'abc', 'b','bd', 'c'], 'b'));
