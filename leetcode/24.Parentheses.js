class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  getLength() {
    return this.stack.length;
  }

  isEmpty() {
    return !this.stack.length;
  }
}

var isValid = function (s) {
  let stack = new Stack();
  const openingBracket = ["(", "{", "["];

  for (let i = 0; i < s.length; i++) {
    if (openingBracket.includes(s[i])) {
      // opening
      stack.push(s[i]);
    } else {
      // closing
      const bracketMap = [
        { closing: ")", opening: "(" },
        { closing: "}", opening: "{" },
        { closing: "]", opening: "[" },
      ];

      const matchedOpeningBracket = bracketMap.find(({ closing }) => {
        return closing == s[i];
      }).opening;

      const openingBracket = stack.peek();
      stack.pop();
      if (matchedOpeningBracket !== openingBracket) return false;
    }
  }

  return stack.isEmpty();
};

console.log(isValid("()")); // true
console.log(isValid("([])")); // true
console.log(isValid("(]")); // false
console.log(isValid("([]]]")); // false
console.log(isValid("()[]{}")); // true
console.log(isValid("[")); // false
console.log(isValid("({{{{}}}))")); // false
