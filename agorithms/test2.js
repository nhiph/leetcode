function solution(D, T) {
  let sumP = 0;
  let sumG = 0;
  let sumM = 0;

  let tempSpaceP = 0;
  let tempSpaceG = 0;
  let tempSpaceM = 0;

  for (let i = 0; i < D.length; i++) {
    tempSpaceP += D[i];
    tempSpaceG += D[i];
    tempSpaceM += D[i];
    if (T[i].includes("P")) {
      let countP = 0;
      for (let j = 0; j < T[i].length; j++) {
        if (T[i][j] == "P") countP++;
      }

      sumP += tempSpaceP * 2 + countP;
      tempSpaceP = 0;
    }

    if (T[i].includes("G")) {
      let countG = 0;
      for (let j = 0; j < T[i].length; j++) {
        if (T[i][j] == "G") countG++;
      }

      sumG += tempSpaceG * 2 + countG;
      tempSpaceG = 0;
    }

    if (T[i].includes("M")) {
      let countM = 0;
      for (let j = 0; j < T[i].length; j++) {
        if (T[i][j] == "M") countM++;
      }

      sumM += tempSpaceM * 2 + countM;
      tempSpaceM = 0;
    }
  }

  return Math.max(sumP, sumG, sumM);
}

console.log(solution([1], ["PP"]));
