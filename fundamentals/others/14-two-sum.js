function twoSum(strA, strB) {
  let minStr = strA.length > strB.length ? strB : strA;
  let maxStr = strA.length > strB.length ? strA : strB;

  let firstChainStr = maxStr.slice(0, maxStr.length - minStr.length);
  let lastChainStr = maxStr.slice(maxStr.length - minStr.length);

  let res = "";
  let memo = 0;

  for (let i = minStr.length - 1; i >= 0; i--) {
    let num = +minStr[i] + +lastChainStr[i] + memo;
    if (num < 10) {
      res = num + res;
      memo = 0;
    } else {
      res = +num - 10 + res;
      memo = 1;
    }
  }
  // console.log('firstChainStr', firstChainStr);
  // console.log('memo', memo);
  // console.log('res', res);

  let prefix = "";
  if (!firstChainStr && !memo) prefix = "";
  else if (!firstChainStr && memo) prefix = "1";
  else prefix = +firstChainStr + memo;

  return prefix + res;
}

console.log("twoSum twoSum twoSum", twoSum("102", "989")); // '11357'
console.log("twoSum twoSum twoSum", twoSum("1", "2")); // '11357'
console.log("twoSum", twoSum("11234", "123")); // '11357'
console.log("twoSum", twoSum("11294", "123")); // '11417'
console.log("twoSum", twoSum("11994", "123")); // '12117'
