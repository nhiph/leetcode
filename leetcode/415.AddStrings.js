var addStrings = function (num1, num2) {
  let min = num1.length < num2.length ? num1 : num2;
  let max = num1.length < num2.length ? num2 : num1;

  let maxVal, minVal;
  let sum = 0;
  let memo = 0;
  let res = "";

  for (let i = 0; i < max.length; i++) {
    maxVal = max[max.length - i - 1] || 0;
    minVal = min[min.length - i - 1] || 0;

    sum = Number(maxVal) + Number(minVal) + memo;

    if (sum > 9) {
      res = +sum - 10 + res;
      memo = 1;
    } else {
      res = sum + res;
      memo = 0;
    }
  }

  return memo ? memo + res : res;
};
