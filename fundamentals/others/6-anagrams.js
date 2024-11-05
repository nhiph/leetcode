// 6. anagrams
// anagrams('coding money', 'money coding') true
// anagrams('rail! safety!', 'fairy tales') true
// anagrams('hi there', 'bye there') false

function createCharMap(string) {
  let result = {};
  let newString = string.toLowerCase().replace(/[\W]/g, ""); // remove specific charater
  for (let char of newString) {
    if (result[char]) {
      result[char] = result[char] + 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

function anagrams(stringA, stringB) {
  const charMapA = createCharMap(stringA);
  const charMapB = createCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }

  return true;
}

console.log("anagrams", anagrams("coding money", "money coding"));
console.log("anagrams", anagrams("rail! safety!", "fairy tales"));
console.log("anagrams", anagrams("hi there", "bye there"));
