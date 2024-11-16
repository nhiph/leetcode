var findDisappearedNumbers = function (nums) {
  let numMap = {};
  for (let n of nums) {
    numMap[n] = 1;
  }

  let res = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!numMap[i]) res.push(i);
  }

  return res;
};
