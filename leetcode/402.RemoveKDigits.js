var removeKdigits = function (num, k) {
  if (num.length === k) return "";

  let stack = [];

  for (let i = 0; i < num.length; i++) {
    const val = +num[i];

    while (stack.length && k > 0 && stack[stack.length - 1] > val) {
      stack.pop();
      k--;
    }

    stack.push(val);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  return Number(stack.join("")).toString();
};

console.log(removeKdigits("1432219", 3)); // 1219
console.log(removeKdigits("10200", 1)); // 200
console.log(removeKdigits("10", 2)); // 0
console.log(removeKdigits("9", 1)); // 0
console.log(removeKdigits("112", 1)); // 11
