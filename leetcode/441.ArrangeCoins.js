var arrangeCoins = function (n) {
  let sum = 0;
  let i = 0; // row 1
  while (sum <= n) {
    i++;
    sum += i;
  }

  return i - 1;
};
