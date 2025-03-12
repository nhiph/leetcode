function once(fn) {
  let count = 0;
  return function (...args) {
    let res = fn(...args);
    count += 1;

    return count === 1 ? res : undefined;
  };
}

const fn1 = once((a, b, c) => a + b + c);
console.log(fn1(1, 2, 3));
console.log(fn1(4, 5, 6));

const fn2 = once((a, b, c) => a * b * c);
console.log(fn2(5, 7, 4));
console.log(fn2(2, 3, 6));
console.log(fn2(6, 8, 1));
