var removeKdigits = function (num, k) {
  let stack = [];

  for (let i = 0; i < num.length; i++) {
    let val = num[i];

    // Remove digits from the stack if they are greater than the current digit
    while (k > 0 && stack.length && stack[stack.length - 1] > val) {
      stack.pop();
      k--;
    }

    stack.push(val);
  }

  // Remove extra digits if k is still > 0
  while (k > 0) {
    stack.pop();
    k--;
  }

  // Remove leading zeros
  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  // If stack is empty, return "0"
  return stack.length ? stack.join("") : "0";
};

console.log(removeKdigits("1432219", 3));
console.log(removeKdigits("10200", 1));
console.log(removeKdigits("10", 2));
console.log(removeKdigits("9", 1));
console.log(removeKdigits("112", 1));
