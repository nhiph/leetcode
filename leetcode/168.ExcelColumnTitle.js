var convertToTitle = function (cn) {
  const arr = [];
  while (cn > 0) {
    const remainder = (cn - 1) % 26;
    arr.push(String.fromCharCode(remainder + 65));
    cn = Math.floor((cn - 1) / 26);
  }
  return arr.reverse().join("");
};

console.log(convertToTitle("1"));
console.log(convertToTitle("701"));
console.log(convertToTitle("28"));
