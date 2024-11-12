var titleToNumber = function (columnTitle) {
  let chars = columnTitle.toUpperCase();
  if (chars.length == 1) return chars[0].toUpperCase().charCodeAt(0) - 64;

  let sum = 0;

  for (let i = 0; i < chars.length; i++) {
    const charVal = chars[i].toUpperCase().charCodeAt(0) - 64;
    if (i != chars.length - 1) {
      sum += charVal * Math.pow(26, chars.length - i - 1);
    } else {
      sum += charVal;
    }
  }

  return sum;
};

console.log(titleToNumber("A"));
console.log(titleToNumber("AB"));
console.log(titleToNumber("ZY"));
console.log(titleToNumber("FXSHRXW"));
