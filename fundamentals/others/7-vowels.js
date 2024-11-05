// 7. vowels: are the charater a, e, i, o , u (ue-oai)
// vowels('Hi there!') 3
// vowels('How are you?') 5
// vowels('Coding Money') 4
// vowels('why?') 0
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// function vowels2(string) {
//     const vowelCheck = ['a', 'e', 'i', 'o', 'u']
//     let count = 0;
//     for (let char of string.toLowerCase()) {
//         if(vowelCheck.includes(char)) count ++
//     }
// }

console.log("vowels", vowels("Hi there!"));
console.log("vowels", vowels("How are you?"));
console.log("vowels", vowels("Coding Money"));
console.log("vowels", vowels("why?"));
