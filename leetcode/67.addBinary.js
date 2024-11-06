var addBinary2 = function (a, b) {
  const minStr = a.length > b.length ? b : a;
  const maxStr = a.length > b.length ? a : b;
  let res = "";
  let memo = 0;
  for (let i = 0; i < maxStr.length; i++) {
    let tempMinVal = +minStr[minStr.length - i - 1];
    if (isNaN(tempMinVal)) tempMinVal = 0;

    let tempMaxVal = +maxStr[maxStr.length - 1 - i];

    let tempVal = tempMaxVal + tempMinVal + memo;

    if (tempVal >= 2) {
      tempVal = tempVal > 2 ? 1 : 0;
      memo = 1;
    } else {
      memo = 0;
    }

    res = tempVal + res;
  }

  return memo ? memo + res : res;
};

console.log(addBinary2("11", "1")); // '100'
console.log(addBinary2("1010", "1011")); // "10101"
console.log(addBinary2("0", "0")); // '0'
console.log(addBinary2("1", "111")); // '1000'
console.log(addBinary2("1111", "1111")); // '11110'
