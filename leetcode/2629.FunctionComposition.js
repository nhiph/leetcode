/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

function compose(functions) {
  return function (x) {
    for (const fn of functions.reverse()) {
      x = fn(x);
    }

    return x;
  };
}

const fn1 = compose([x => x + 1, x => 2 * x])
const fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x])
const fn3 = compose([])
console.log(fn1(4))
console.log(fn2(1))
console.log(fn3(42))