// 13. Farthest between 1 & 1

function findFarthest(text) {
  let leftIdx = -1;
  let rightIdx = -1;
  let space = 0;

  for (let i = 0; i < text.length; i++) {
    if (+text[i]) {
      if (rightIdx == -1) {
        leftIdx = rightIdx = i;
      } else {
        leftIdx = rightIdx;
        rightIdx = i;
        space = Math.max(space, rightIdx - leftIdx);
      }
    }
  }

  return space;
}

console.log("findFarthest", findFarthest("11")); // 1
console.log("findFarthest", findFarthest("101")); // 2
console.log("findFarthest", findFarthest("1001")); // 3
console.log("findFarthest", findFarthest("100001")); // 5
console.log("findFarthest", findFarthest("10010000101")); // 5
console.log("findFarthest", findFarthest("1000010010010010000010001")); // 6
