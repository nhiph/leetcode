// https://niithanoi.edu.vn/43-cau-hoi-javascript-nang-cao.html
// https://www.youtube.com/watch?v=e0u8z-9aAEw&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=3

// excersie 1: Hoisting ******************************************************************************************************************************

// function sayHi() {
//   console.log(name);
//   //   console.log(age);
//   var name = "Lydia"; // hoisting, move declaration varibale to the top, but not assign at the top
//   let age = 21; // hoisting, move declaration varibale to the top but in the dead
// }

// sayHi();

// undefined and ReferenceError

// excersie 2: var or let with declaration & assignable ******************************************************************************************************************************

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// 3 3 3 and 0 1 2

// var a = 10;
// (function() {
//   console.log(a);

//   a=5;
//   console.log(window.a);
//   var a= 20;
//   console.log(a);
// })();


// function f1() {
//   console.log('log f1')
// }

// function f2() {
//   console.log('log f2')

// }
// setTimeout(f1, 300);
// setTimeout(f2, 100);

// function sleep(n) {
//   var now = Date.now();
//   while (Date.now() - now < n) {}
//   console.log('sleep')
// }
// sleep(200);

// excersie 3:this in arrow function ******************************************************************************************************************************

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter()); // 20, this in diameter => shape obj
console.log(shape.perimeter()); // NaN, this in perimeter => current scrope arround it, where shape.perimeter() is called at global => this is window

const worker1 = () => ({
  ref: this,
  name: "hello 1",
});

const worker2 = function () {
  return {
    ref: this,
    name: "hello 2",
    age: 21,
  };
};

console.log("excersie 3 worker1 worker1", worker1); // function
console.log("excersie 3 worker1 worker1()", worker1()); // { ref: {}, name: 'hello 1' }
console.log("excersie 3 worker1 worker1.ref", worker1.ref); // undefined, func can not access as obj
console.log("excersie 3 worker1 worker1.name", worker1.name); // worker1 , name of func prioritizes than not name of returned property
console.log("excersie 3 worker1 worker1.name", worker1.age); // undefined, func can not access as obj
console.log("excersie 3 worker1 worker1().ref", worker1().ref); // {}
console.log("excersie 3 worker1 worker1().name", worker1().name); // hello 1

console.log("excersie 3 worker2 worker2", worker2); // function
console.log("excersie 3 worker2 worker2()", worker2()); // { ref: global window, name: 'hello 2' }
console.log("excersie 3 worker2 worker2.ref", worker2.ref); // undefined, func can not access as obj
console.log("excersie 3 worker2 worker2.name", worker2.name); // worker2, name of func prioritizes than not name of returned property
console.log("excersie 3 worker2 worker2.age", worker2.age); // undefined, func can not access as obj
console.log("excersie 3 worker2 worker2().ref", worker2().ref); // window, global
console.log("excersie 3 worker2 worker2().name", worker2().name); // hello 2

// excersie 4: Chuyển đổi số bằng toán tử +, tính chất truthy value ******************************************************************************************************************************

+true; // 1, + => number, +true = 1; +false = 0
!"ICT Hà Nội"; // false

// in JS, we have 6 falsy value, remaining is truthy value
// Boolean: false
// Number: 0. NaN
// String: ''
// null, undefined

// excersie 5: Chuyển đổi số bằng toán tử +, tính chất truthy value ******************************************************************************************************************************

const bird = {
  size: "small",
};

const mouse = {
  name: "Mickey",
  small: true,
};

// excersie 6: Tương tác bằng tham chiếu trong Javascript là thế nào? ******************************************************************************************************************************

let c = { greeting: "Hey!" }; // c => #00c
let d;

d = c; // d => #00c
c.greeting = "Hello";
console.log(d.greeting); // "Hello", because they're in the same adrress

let a = { c: { d: 1 } }; // a => #00a, c => #00c
let b = { ...a }; // b => #00b, c => #00c (because b clone a, but can not clone nested in a)
b.c.d = 2; // => #00c
console.log("exercise 6", a.c.d); // 2

// excersie 7: Toán tử == và === trong Javascript khác nhau như thế nào? ******************************************************************************************************************************
let a7 = 3;
let b7 = new Number(3);
let c7 = 3;

console.log(a7 == b7); // true
console.log(a7 === b7); // false, a7: number, b7: obj from Number func constructor
console.log(b7 === c7); // false, c7: number, b7: obj from Number func constructor

// excersie 8: Hiểu hơn về hàm Static trong Javascript? ******************************************************************************************************************************

class Chameleon {
  static colorChange(newColor) {
    // static modifiers, ở trên constructor à không thể truyền lại cho bất kỳ child nào.
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
// console.log("excersie 8", freddie.colorChange("orange")); // freddie.colorChange is not a function

// excersie 9: Về cơ bản thì sử dụng 'use strict' để làm gì? ******************************************************************************************************************************

let greeting;
greetign = {}; // Giả sử bị lỗi đánh máy!
console.log("excersie 9", greetign); // {},  window.greetign = {}
console.log("excersie 9", greetign); // ReferenceError: greetign is not defined, if 'use strict'

// excersie 10: Điều gì xảy ra khi tạo thuộc tính cho hàm giống như object?******************************************************************************************************************************


function bark() {
  console.log("Woof!");
}

bark.animal = "dog";


// 12: 
var strig = 'hello friends'
var obj = { fName: 'test', age: 100 }
// strig = 'set before hello guys'

var arr1 = [1, strig, obj];
var arr2 = [1, {data: strig}, obj];

obj.age = 200;
strig = 'set after hello guys'

console.log('strig', strig);

console.log('exercise 12 arr1', arr1);
console.log('exercise 12 arr2', arr2);


