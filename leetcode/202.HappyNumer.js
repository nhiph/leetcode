var isHappy = function (n) {
  let checkedNums = new Set();

  while (n != 1 && !checkedNums.has(n)) {
    checkedNums.add(n);

    let sum = 0;
    for (let i = 0; i < n.toString().length; i++) {
      let int = +n.toString()[i];
      sum += Math.pow(int, 2);
    }

    n = sum;
  }

  return n == 1;
};

console.log(isHappy(19));
console.log(isHappy(2));
