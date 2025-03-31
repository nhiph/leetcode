var minLength = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let peek = stack[stack.length - 1] || "";
    let str = `${peek}${s[i]}`;
    if (str === "AB" || str === "CD") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length;
};

console.log(minLength("ABFCACDB"));

console.log(minLength("ACBBD"));
