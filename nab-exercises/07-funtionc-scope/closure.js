// in parent funtion, we expose a child function that are using a variable of parent function, to help keep variable in parent outside

// normal behavior: when a function finish => all variable is unexisted

// 2 benefits of close
// 1. expose variable of parent to use
// 2. hide variable by anoter func

// we can not destroy that variable, it'll be auto destroy when it run entrire file js,
// => disadvantages: when we use so many closures => it'll heavy memory of js

function parent1() {
  let test = 1;
  return function parent2() {
    return function parent3() {
      return;
    };
  };
}
