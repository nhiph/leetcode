function asteroidCollision(asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let cur = asteroids[i];
    let peek = stack[stack?.length - 1] || 0;

    if (!stack.length || peek < 0 || cur > 0) {
      stack.push(cur);
    } else if (cur + peek === 0) {
      if (stack.length) {
        stack.pop();
      }
    } else if (Math.abs(peek) < Math.abs(cur)) {
      if (stack.length) {
        stack.pop();
      }
      i--;
    }
  }

  return stack;
}

console.log(asteroidCollision([5, 10, -5])); // [5,10]
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([-2, -1, 1, 2])); // [-2,-1,1,2]
