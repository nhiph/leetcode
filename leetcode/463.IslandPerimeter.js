var islandPerimeter = function (grid) {
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let perimeter = 0;

  let maxRow = grid.length - 1;
  let maxCol = grid[0].length - 1;
  let pos = [];

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        let isMatched = 0;

        for (const [x, y] of dirs) {
          let newRow = row + x;
          let newCol = col + y;
          if (newRow < 0 || newRow > maxRow || newCol < 0 || newCol > maxCol)
            continue;

          if (grid[newRow][newCol] === 1) {
            isMatched++;
          }
        }

        perimeter += 4 - isMatched;
      }
    }
  }

  return perimeter;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
