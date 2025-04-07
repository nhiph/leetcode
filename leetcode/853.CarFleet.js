var carFleet = function (target, position, speed) {
  const n = position.length;
  const cars = position.map((pos, i) => [pos, (target - pos) / speed[i]]);
  //   console.log('111', cars)
  cars.sort((a, b) => b[0] - a[0]);
  console.log("222", cars);
  const stack = [];
  for (const [pos, time] of cars) {
    console.log({ pos, time });
    if (stack.length === 0 || time > stack[stack.length - 1]) {
      stack.push(time);
    }
  }

  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// console.log(carFleet(10, [3], [3]));
// console.log(carFleet(12, [0, 2, 4], [4, 2, 1]));
