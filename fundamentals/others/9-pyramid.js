// 9. steps(n)
// steps(2)
// '# '
// '##'

// steps(3)
// '#  '
// '## '
// '###'

// steps(4)
// '#   '
// '##  '
// '### '
// '####'

function steps(n) {
  for (let row = 1; row <= n; row++) {
    let line = "";
    for (let col = 1; col <= n; col++) {
      if (col <= row) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

steps(6);
