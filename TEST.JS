// function findLargestNum(arr) {
//   let sortedArr = arr.sort((a, b) => a - b); // -3,1,2,3,5
//   let postiveNum = arr.filter((num) => num > 0); //1,2,3,5
//   let lastIdx = postiveNum.length - 1; // 3

//   while (lastIdx >= 0) {
//     if (sortedArr.includes(-postiveNum[lastIdx])) {
//         return postiveNum[lastIdx];
//     }
//     else lastIdx--;
//   }
//   return 0;
// }

// console.log(findLargestNum([1, 2, 3, -3, 5]));
// console.log(findLargestNum([1, ,1, 2, -1, 2, -1]));
// console.log(findLargestNum([1, 2,3, -4]));

// 1
// let reaction = 'mike'
// reaction[0] = 'l'
// console.log(reaction)
// // string is primitive alue, can not change variable, immutable can not change in this case

// let pet = 'cat'
// pet = 'dog'
// console.log(pet)

// 2
// let action = 'yikes'
// let arr = [250, 1, -10]
// arr[0] = action
// console.log(arr)

// let rapper = {name: 'nhi'}
// rapper.name = 'update nhi'
// rapper['name'] = '33 nhi'
// console.log(rapper)

// // Ex: draw object
// const sherlock = {
//   surname: 'home',
//   address: {city: 'London'}
// }

// const john = {
//   surname: 'Waston',
//   address: sherlock.address
// }

// john.surname = 'abc'
// john.address.city = 'lemon'

// // Isuue change value of address city of sherlock, use spread
// const clonedJohn = {
//   ...sherlock,
//   name: '',
//   address: {...sherlock.address, city: ''}
// }

// let sum = 0;
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 2; j++) {
//     sum = sum + i + j;
//     // continue; // 25
//     // break; // 10
//   }
// }

// console.log(sum);

// const nums = [-2, 7, -4, 6];

// function checkNumExist(nums, target) {
//   nums.sort((a, b) => a - b);

//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) return "Found";
//     else if (nums[mid] < target) left = mid;
//     else right = mid - 1;
//   }
//   return "Not found";
// }

// console.log(checkNumExist(nums, -2));
// console.log(checkNumExist(nums, -5));
