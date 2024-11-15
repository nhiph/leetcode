var countBits = function (n) {
  // convert nums base ten to base binary
  let result = Array(n + 1).fill(0); // [0,1,2]
  let offset = 1; // to track pow(266t,n) value ex: 1,2,4,8,16
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }

  return result;
};

// f(n) = 1 + f(n - Math.pow(2, x)); x = 0,1,2,3 with 2^x <= n; 
// in this exercie; offSet = Math.pow(2, x);

// 1 => 1     res[1] = 1 + res[1 - 1]
// 2 => 10    res[2] = 1 + res[2 - 2]
// 3 => 11    res[3] = 1 + res[3 - 2]
// 4 => 100   res[4] = 1 + res[4 - 4]
// 5 => 101   res[5] = 1 + res[5 - 4]
// 6 => 110   res[6] = 1 + res[6 - 4]
// 7 => 111   res[7] = 1 + res[7 - 4]
// 8 => 200   res[8] = 1 + res[8 - 8]
