var orangesRotting = function (grid) {
  // 1. find first rotten oranges, push them to queue with position and min starting equal 0
  let time = 0;
  let queue = [];
  let oranges = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col, 0]);
      } else if (grid[row][col] === 1) {
        oranges += 1;
      }
    }
  }


  // 2. iterator throught rotten oranges, find surrounding oranges of rotten that's valid, and push to queue
  // 3. add found oranges to queue and updated them to rotten oranges with proper mins plus one
  const maxRow = grid.length - 1;
  const maxCol = grid[0].length - 1;
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  while (queue?.length && oranges) {
    let [curRow, curCol, curMin] = queue.shift(); // get first rotten orange info from queue and pop out it from queue

    if (grid[curRow][curCol] === 1) {
      grid[curRow][curCol] = 2;
      oranges--;
      time = curMin;
    }

    for (const [x, y] of dirs) {
      let newRow = curRow + x;
      let newCol = curCol + y;

      if (newRow < 0 || newRow > maxRow || newCol < 0 || newCol > maxCol)
        continue;

      if (grid[newRow][newCol] === 1) {
        queue.push([newRow, newCol, curMin + 1]);
      }
    }
  }
    console.log("oranges", oranges);

  // 4. util no checked rotten oranges in queue and no fresh orange
  return oranges ? -1 : time;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
); // -1
console.log(orangesRotting([[0, 2]])); // 0
