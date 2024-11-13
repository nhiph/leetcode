var addDigits = function (num) {
  while (num.toString().length > 1) {
    let total = 0;
    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
      total += Number(numStr[i]);
    }

    num = total;
  }

  return num;
};

console.log(addDigits(38));
console.log(addDigits(0));
