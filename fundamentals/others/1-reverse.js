// 1. Reverse
// pureReverse('hello') => 'olleh'
// builtReverse('Coding') => 'gnidoC'
// reverseInt

function reverse(str) {
  const newStr = str.toString();
  let res = "";
  for (let i = newStr.length - 1; i >= 0; i--) {
    res += newStr[i];
  }

  return res;
}

console.log("reverse", reverse("hello"));
console.log("reverse", reverse("hello"));
console.log("reverse", reverse(500));
console.log("reverse", reverse(-15));
