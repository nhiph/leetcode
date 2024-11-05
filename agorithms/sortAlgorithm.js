// bubble sort
// insertion sort
// quick sort
// merge sort

function insertionSort(arr) {
    // loop through unsorted part
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        // j = index of elements in sorted part
        let j = i - 1;
        while (j>= 0 && arr[j] > numberToInsert) {
            arr[j+1] = arr[j];
            j = j - 1;
        }
        // Place NTI to the right of SE
        arr[j+1] = numberToInsert;
    }
}
const arr = [-5, 22, 6, -3, 4];
insertionSort([-5, 22, 6, -3, 4]);
console.log(arr) // [-5,-3,4,6,22]

console.log(lastName);
// console.log(firstName);

var lastName = "nhi";
var lastName = "nhiupdate";

let firstName = "phung";

console.log(lastName);

function logName() {
    var lastName = "Binh"
    let firstName = "aaa"
    console.log("lastName", lastName)
    console.log("firstName", firstName)
}

logName()