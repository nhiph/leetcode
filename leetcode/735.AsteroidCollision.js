function asteroidCollision(asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let peek = stack[stack.length - 1];
    let cur = asteroids[i];

    if (!stack.length || cur > 0 || peek < 0) {
      stack.push(cur);
    } else if (cur + peek === 0) {
      stack.pop();
    } else if (Math.abs(cur) > Math.abs(peek)) {
      stack.pop();
      i--;
    }
  }

  return stack;
}

console.log(asteroidCollision([5, 10, -5])); // [5,10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
