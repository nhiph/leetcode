var minOperations = function (logs) {
  let stack = [];

  for (const log of logs) {
    if (log === "../") {
      stack.pop();
    } else if (log !== "./") {
      stack.push(log);
    }
  }

  return stack.length;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
console.log(minOperations(["d1/", "../", "../", "../"]));
console.log(minOperations(["../"]));
