// https://app.codility.com/programmers/lessons/1-iterations/

function solution(N) {
  if (N === 0) return 0;
  let binaryStr = "";

  while (N > 0) {
    binaryStr = (N % 2) + binaryStr;
    N = Math.floor(N / 2);
  }

  return binaryStr;
}

function findGap(str) {
  let maxGap = 0;
  let currentGap = 0;
  let foundOne = false;
  for (let bit of str) {
    if (bit === "1") {
      console.log("IF", bit);

      if (foundOne) {
        maxGap = Math.max(maxGap, currentGap);
      }
      foundOne = true;
      currentGap = 0;
    } else if (foundOne) {
      console.log("ELSE IF", bit);

      currentGap++;
    }
  }

  return maxGap;
}

function findGap1(str) {
  let left = 0;
  let right = left + 1;
  let count = 0;
  let max = 0;

  while (left <= right && right < str.length) {
    if (str[left] === 0) {
      left++;
      right = left + 1;
      console.log("IF 1111");
      continue;
    }
    if (str[right] === str[left]) {
      max = Math.max(max, count + 1);
      left = right + 1;
      right = left + 1;
      count = 0;
    } else {
      count++;
      right++;
    }
  }

  return max;
}

console.log(findGap1("10000010001")); // 5
console.log(findGap1("10110")); // 1
console.log(findGap1("1000")); // 0
