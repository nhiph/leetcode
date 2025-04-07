var dailyTemperatures = function (temperatures) {
  let res = [];
  for (let i = 0; i < temperatures.length; i++) {
    let count = 1;

    while (
      temperatures[i + count] <= temperatures[i] &&
      i + count < temperatures.length
    ) {
      count++;
    }

    if (i + count == temperatures.length) {
      count = 0;
    }

    res.push(count || 0);
  }

  return res;
};

function dailyTemperatures1(temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = []; // stores indices

  for (let i = temperatures.length - 1; i >= 0; i--) {
    // Pop stack until we find a warmer temperature
    while (
      stack.length &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    console.log({ i, stack });

    if (stack.length) {
      res[i] = stack[stack.length - 1] - i;
      console.log("11111", { res });
    }

    stack.push(i);
  }

  return res;
}

function dailyTemperatures2(temperatures) {
  let stack = [];
  let res = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const idx = stack.pop();
      res[idx] = i - idx;
    }

    stack.push(i);
  }

  return res;
}

console.log(dailyTemperatures2([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures2([30, 40, 50, 60])); // [1,1,1,0]
console.log(dailyTemperatures2([30, 60, 90])); // [1,1,0]
