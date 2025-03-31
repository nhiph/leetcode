var maxArea = function (height) {
  let map = new Map();
  for (let i = 0; i < height.length; i++) {
    map.set(i + 1, height[i]);
  }
  let area = 0;
  for (let i = 1; i <= map.size; i++) {
    for (let j = i + 1; j <= map.size; j++) {
      let length = Math.min(map.get(i), map.get(j));
      let width = j - i;
      area = Math.max(area, length * width);
    }
  }

  return area;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));

var trap = function (height) {
  let map = new Map();

  for (let i = 0; i < height.length; i++) {
    map.set(i, height[i]);
  }

  let res = 0;

  let l = 0;
  let r = l + 2;

  while (r < height.length) {
    if (height[r - 1] > height[r]) {
      l = r - 1;
      r++;
    } else if (height[r + 1] < height[r]) {
      res += (r - l - 1) * Math.min(map.get(l), map.get(r));
      console.log({ [l]: map.get(l), [r]: map.get(r), res });
      l = r;
      r = l + 2;
      console.log("after res", { l, r });
    } else {
      r++;
    }
  }

  return res;
};

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
// console.log(trap([4, 2, 0, 3, 2, 5])); // 9

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    return this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

function isValid(s) {
  const stack = new Stack();
  const bracketMap = new Map();
  bracketMap.set("(", ")");
  bracketMap.set("[", "]");
  bracketMap.set("{", "}");

  for (let i = 0; i < s.length; i++) {
    if (bracketMap.has(s[i])) {
      stack.push(s[i]);
    } else {
      const closeBracket = bracketMap.get(stack.peek());
      if (s[i] === closeBracket) stack.pop();
      else return false;
    }
  }

  return true;
}

// console.log(isValid("()[]{}")); // true
// console.log(isValid("()")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([])")); // true

var maxProfit = function (prices) {
  let profit = 0;
  let dayPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    dayPrice = Math.min(dayPrice, prices[i]);
    profit = Math.max(profit, prices[i] - dayPrice);
  }

  return profit;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // 0

const isNotBlocked = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ">" && !!s[i + 1]) return false;
  }

  return true;
};

// console.log(isNotBlocked(">><")); // false
// console.log(isNotBlocked(">>>")); // false
// console.log(isNotBlocked("<<<^")); // true
// console.log(isNotBlocked("<<><")); // false
// console.log(isNotBlocked("<<<")); // true
// console.log(isNotBlocked("<<<>")); // true
// console.log(isNotBlocked("<<<>>")); // false
// console.log(isNotBlocked("<^<>")); // true

// go right, not at the end is blocked

class Queue {
  constructor() {
    this.items = [];
  }

  push(item) {
    return this.items.push(item);
  }

  pop() {
    return this.items.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

const findRottenOranges = (i, j) => {
  // top, bottom, left, right
  return new Map([
    [[i - 1], j],
    [[i + 1], j],
    [[i], j - 1],
    [[i], j + 1],
  ]);
};

var orangesRotting = function (grid) {
  let queue = [];
  let freshOranges = 0;
  let mins = 0;

  grid.forEach((num) => {
    if (num === 2) queue.push(num);
    else if (num === 1) freshQueue.push();
  });

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 2) queue.push([i, j, 0]);
      else if (grid[i][j] == 1) freshOranges ++;
    }
  }

  console.log('queue', queue)
  console.log('freshOranges', freshOranges)

  // DFS: stack || recursion
  // BFS: queue, // robut

  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const endR = grid.length - 1,
    endC = grid[0].length - 1;

    console.log('a', queue.length)
  while (queue.length && freshOranges > 0) {
    console.log('in side')
    // BFS, // robot hut bui,

    const [curR, curC, mins] = queue.shift();
    console.log('test', { curR, curC, mins });

    //
    // loop 4 direction for new row, line
    // check isValid, out of bound to push to rottenQueue
  }
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
