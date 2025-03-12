var argumentsLength = function (...args) {
  if (!args) return 0;
  return args.length;
};

console.log(argumentsLength({},null,"3",))
console.log(argumentsLength(3))