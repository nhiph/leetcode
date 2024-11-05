// bubble sort
// https://github.com/Ren0503/javascript-algorithms-and-data-structure

function bubbleSort(array) {
    // Loop 1: j 
    // 1st: move the largest number to the last one
    // 2sd: move the second largest number to the next one
    // 3rd: move the third largest number to the next one
    // 4th: move the fourth largest number to the next one
    // 5th: move the fifth largest number to the next one
    for (var j = 0; j < array.length - 1; j++) {
        // loop 2: i
        // compare 2 number next door to chose the larger one
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i+1]) {
                var temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            }
        }
    }

    return array;
};

const res1 = bubbleSort([5,0,3,8,-1, -10, 4]);
console.log(res1);
