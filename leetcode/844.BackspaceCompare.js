var backspaceCompare = function (s, t) {
  let sStack = [];
  let tStack = [];

  for (let i = 0; i < s.length; i++) {
    let peek = sStack[sStack.length - 1] || "";
    if (s[i] === "#") {
      sStack.pop();
    } else {
      sStack.push(s[i]);
    }
  }

  for (let i = 0; i < t.length; i++) {
    let peek = tStack[tStack.length - 1] || "";
    if (t[i] === "#") {
      tStack.pop();
    } else {
      tStack.push(t[i]);
    }
  }

  return sStack.join("") === tStack.join("");
};

console.log(backspaceCompare("ab#c", "ad#c")); // true
console.log(backspaceCompare("ab##", "c#d#")); // true
console.log(backspaceCompare("a#c", "b")); // false
