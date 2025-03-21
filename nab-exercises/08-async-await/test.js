setTimeout(() => {
  console.log(40);
}, 100);
setTimeout(() => {
  console.log(30);
}, 100);

var glohowP1 = Promise.resolve(2);
var glohowP2 = Promise.resolve(3);
glohowP1.then((data) => {
  setTimeout(() => {
    console.log(data);
  }, 0);
});
glohowP2.then((data) => {
  setTimeout(() => {
    console.log(data);
  }, 0);
});

console.log(1);

// 1,40, 30, 2, 3

// log_1: finish
// log_30: register log_30 in macro
// log_40: register log_40 in macro
// macro: log_30, log_40

// then_p1: register 
// then_p2 
// log_40, 


// depend on timer (should calculate by s), ms may be incorrect in some cases, 



