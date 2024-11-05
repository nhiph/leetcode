// linear: tim kiem tuyen tinh => duyet qua tung phan tu cho den khi tim thay ket qua
// binary search: tim kiem nhi phan => sap xep danh sach theo thu tu tang dan, so sanh phan tu can tim vs phan tu giua danh sach, va loai bo 1 nua danh sach dua tren ket qua so sanh
// recursion binary search: tim kiem nhi phan de qui => extended cua binary, tach danh sach thanh 2 nua va tim kiem



// Ex1: linear search

function linearSearch(array, num) {
    var res = -1 // can not find
    for(var i = 0; i < array.length; i ++) {
        if (array[i] === num) res = i;
    }
    return res;
};

console.log('linear', linearSearch([-4,6,12,5,8], 12)) // 2
console.log('linear', linearSearch([-4,6,12,5,8], 5)) // 3
console.log('linear', linearSearch([-4,6,12,5,8], 8)) // 4
console.log('linear', linearSearch([-4,6,12,5,8], 1)) // -1


// Ex2: binary search, from sorted array

function binarySearch(array, num) {
    // find the middle number 
    // compare middle & target to determine left or right side
    // find the middle number 
    // compare middle & target to determine left or right side

    var leftIdx = 0;
    var rightIdx = array.length - 1;

    while (leftIdx <= rightIdx) {
        var middleIdx = Math.floor((leftIdx + rightIdx)/2);
        if (num === array[middleIdx]) return middleIdx;
        if (num < array[middleIdx]) rightIdx = middleIdx - 1;
        else leftIdx = middleIdx + 1;
    }
    return -1;
};

console.log('binary', binarySearch([-4,5,6,8,12], 12)) // 4
console.log('binary', binarySearch([-4,5,6,8,12], 8)) // 3
console.log('binary', binarySearch([-4,5,6,8,12], 7)) // -1

// Ex3: recursion binary search

function search(array, target, left, right) {
    if (left > right) return -1;
    let middle = Math.floor((left + right)/2)
    if (target === array[middle]) return middle;
    if (target < array[middle]) {
        return search(array, target, left, middle - 1)
    }
    else return search(array, target, middle + 1, right);
};

function recursionBinarySearch(array, target) {
    return search(array, target, 0, array.length - 1);
};

console.log('recursionBinarySearch', recursionBinarySearch([-4,5,6,8,12], 12)) // 4
console.log('recursionBinarySearch', recursionBinarySearch([-4,5,6,8,12], 8)) // 3
console.log('recursionBinarySearch', recursionBinarySearch([-4,5,6,8,12], 7)) // -1