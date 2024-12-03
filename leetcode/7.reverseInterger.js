var reverse = function (x) {
  let xStr = x.toString();
  let res = "";
  for (let i = 0; i < xStr.length; i++) {
    if (xStr[i] == "-") continue;
    res = xStr[i] + res;
  }

  if (Number(res) > Math.pow(2, 31)) return 0;
  if (x < 0) res = -res;
  return Number(res);
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
