// console.log(anonymouseSquare(1))
console.log(anonymouseSquare(1))
// var test = 'abc'

// 1st: declaration fn
function squareFn(params) { // has hoisting
    return params
}

// 2 sd
const anonymouseSquare = function(num) { // assign anonymous function => no hoisting
    return num
}

// 3rd
const arrowSquare = (num) => num