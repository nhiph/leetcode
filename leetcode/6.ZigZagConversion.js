var convert = function (s, numRows) {
    if (s.length <= 1) return s 
    if (numRows == 1) return s
    let cycleLength = 2 * numRows - 2;
    let result = "";
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; i + j <= s.length; j += cycleLength) {
            result += s.charAt(i + j); // last & first row

            // handle for middle row
            const notFirstRow = i != 0;
            const notLastRow = i != numRows - 1;
            const nextMidCharInBound = j + cycleLength - i < s.length;
            if (notFirstRow && notLastRow && nextMidCharInBound) {
                result += s.charAt(j + cycleLength - i);
            }
        }
    }
    return result;
};

// console.log(convert("PAYPALISHIRING", 3)); 
console.log(convert("AB", 1)); 
