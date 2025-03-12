var letterCombinations = function(digits) {
    if (!digits.length) {
        return [];
    }
    
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const res = [];
    
    function backtrack(idx, comb) {
        console.log({idx, comb})
        if (idx === digits.length) {
            res.push(comb);
            return;
        }
        
        console.log('str', digitToLetters[digits[idx]])
        for (const letter of digitToLetters[digits[idx]]) {
            console.log('letter', letter)
            backtrack(idx + 1, comb + letter);
        }
    }
    
    backtrack(0, "");
    
    return res; 
  };
  console.log(letterCombinations('23')) // abc, def