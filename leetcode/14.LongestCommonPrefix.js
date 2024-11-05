var findMinLength = function (strs) {
  let minLength = strs[0].length;
  for (let i = 0; i < strs.length; i++) {
    if (minLength > strs[i].length) {
      minLength = strs[i].length;
    }
  }

  return minLength;
};

var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  const minLength = findMinLength(strs);

  for (let i = 0; i < minLength; i++) {
    let char = strs[0][i];
    let flag = true;
    for (let j = 1; j < strs.length; j++) {
      flag = flag && strs[j][i] == char;
    }
    if (flag) commonPrefix += char;
    else break;
  }
  return commonPrefix;
};
