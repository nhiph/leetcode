function encode(strs) {
  let res = "";
  for (let i = 0; i < strs.length; i++) {
    let length = strs[i].length;
    let str = `${length}#${strs[i]}`;
    res += str;
  }

  return res;
}

function decode(s) {
  let res = [];
  let i = 0;

  while (i < s.length) {
    let j = i;
    while (s[j] !== "#") {
      j++;
    }

    let len = parseInt(s.slice(i, j));
    let word = s.slice(j + 1, j + 1 + len);
    res.push(word);

    i = j + 1 + len;
  }

  return res;
}

let encode1 = encode(["need", "code", "love", "you"]);
console.log("encode1", encode1);

console.log(decode(encode1));

// let encode2 = encode(["need", "co#de", "lo##ve", "you"]);
// console.log(decode(encode2));

// let encode3 = encode(["we", "say", ":", "yes", "!@#$%^&*()"]);
// console.log("endcode3", encode3);
// console.log(decode(encode3));
