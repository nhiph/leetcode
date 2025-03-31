var floodFill = function (image, sr, sc, color) {
  let queue = [];
  queue.push([sr, sc]);
  const updatedVal = image[sr][sc];

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const maxRow = image.length - 1;
  const maxCol = image[0].length - 1;

  while (queue.length) {
    const [curRow, curCol] = queue[0];
    image[curRow][curCol] = color;

    for (const [row, col] of dirs) {
      let newRow = curRow + row;
      let newCol = curCol + col;

      if (newRow < 0 || newRow > maxRow || newCol < 0 || newCol > maxCol) {
        continue;
      }

      if (image[newRow][newCol] === updatedVal) {
        queue.push([newRow, newCol]);
      }
    }

    queue.shift();
  }

  return image;
};

// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1],
//     ],
//     1,
//     1,
//     2
//   )
// ); // [[2,2,2],[2,2,0],[2,0,1]]

// console.log(
//   floodFill(
//     [
//       [0, 0, 0],
//       [0, 0, 0],
//     ],
//     1,
//     0,
//     2
//   )
// ); // [[2,2,2],[2,2,2]]

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
    0,
    0,
    0
  )
); // [[2,2,2],[2,2,2]]
