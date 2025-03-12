function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
}

// use bit

function calculatePrice(age) {
  let price = 5;
  if (age > 60) {
    price = 15;
  } else if (age > 18) {
    price = 20;
  } else if (age > 12) {
    price = 10;
  }

  return price;
}

console.log(calculatePrice(76));

function expect(val) {
  return {
    toBeEqual: function (expectedVal) {
      if (val === expectedVal) return true;
      else throw new Error();
    },
    toBeNotEqual: function (unexpectedVal) {
      if (val === unexpectedVal) return false;
      else throw new Error();
    },
  };
}

console.log(expect(calculatePrice(76)).toBeEqual(15));

var map = function (arr, fn) {
  const result = [];
  for (const i in arr) {
    result[i] = fn(+arr[i], +i);
  }
  return result;
};
