// 5. Capitalize
// capitalize('this is a book') This Is A Book
// capitalize('ok, I am coming there') Ok, I Am Coming There

function pureCapitalize(string) {
  const result = [];
  const words = string.split(" ");

  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }

  return result.join(" ");
}

console.log("capitalize", pureCapitalize("this is a book"));
console.log("capitalize", pureCapitalize("ok, I am coming there"));
console.log("capitalize", builtCapitalize("this is a book"));
console.log("capitalize", builtCapitalize("ok, I am coming there"));
