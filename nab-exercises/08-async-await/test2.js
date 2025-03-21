// setTimeout(() => {
//     console.log('10')
// }, 30)

// var glohowP1 = new Promise((resolve, reject) => {
//     console.log('implementing')
//     setTimeout(() => {
//         resolve('inside promise')
//     }, 3)
// });

// glohowP1.then((data) => {
//     console.log('data', data)
// })

// let nhi = new Person('nhi')

// // function Person(name) {
// //     this.name = name
// // }

// console.log('nhi', nhi)

// class Race {
//     constructor(raceName) {
//         this.raceName = raceName
//     }

//     shareRaceName() {
//         console.log(`hello ${this.raceName}`)
//     }
// }
// console.log(race)
// race.shareRaceName()

// console.log("A");
// setTimeout(() => {
//   console.log("B");
// });

// new Promise((resolve, reject) => {
//     console.log('C')

//     setTimeout(() => {
//         resolve('D')
//     }, 0)

//     reject('E')
// }).then(data => console.log(data))
// .catch(err => console.log(err))

// for (var i = 0; i <= 5; i++) {
//   function execute(i) {
//     setTimeout(() => {
//       console.log(i);
//     });
//   }

//   execute(i);
// }

// const person = {
//     name: 'lynie'
// }

// function sayHi(age) {
//     return `${this.name} is ${age}`
// }

// console.log('111', sayHi.call(person, 21))
// console.log('222', sayHi.bind(person, 21))

function Timer() {
  let time = 0;
  let intervalId = null;

  return {
    start: function () {
      intervalId = setInterval(() => {
        time++;
      }, 1000);
      // Start the timer (increase time every second)
    },
    pause: function () {
      // Pause the timer
      clearInterval(intervalId);
    },
    reset: function () {
      time = 0;
      clearInterval(intervalId);
    },
    getTime: function () {
      return time;
    },
  };
}

const timer = Timer();
timer.start(); // Should start counting up every second
setTimeout(() => {
  timer.pause();
  console.log("after pause", timer.getTime());
}, 5100); // Pauses after 5 seconds
setTimeout(() => {
  timer.reset();
  console.log("after reset", timer.getTime());
}, 7000); // Resets after 7 seconds
