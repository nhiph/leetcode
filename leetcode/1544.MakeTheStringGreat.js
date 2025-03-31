var makeGood = function (s) {
  if (s?.length <= 1) return s;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let peek = stack[stack.length - 1] || "";

    if (s[i] === peek.toUpperCase()) {
      stack.pop();
      continue;
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
};

console.log(makeGood("leEeetcode")); // leetcode
console.log(makeGood("abBAcC")); //
console.log(makeGood("s")); // s
