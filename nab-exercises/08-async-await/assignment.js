// Ex1

// Instructions:

// Implement the Logger function so that it returns a function that logs messages with a prefix.
// Each logger should be created with a log level ('info', 'debug', etc.).
// The returned function should print messages in the format:
// [LEVEL]: message
// Example

function Logger(status) {
  if (!status) return "No message!";
  const statusMap = {
    info: "INFO",
    debug: "DEBUG",
    error: "ERROR",
  };
  let prefixStatus = statusMap[status];

  return function (message) {
    return `[${prefixStatus}]: ${message}`;
  };
}

// Create loggers
const infoLog = Logger("info");
const debugLog = Logger("debug");
const errorLog = Logger("error");

// Test logs
console.log(infoLog("hello world")); // [INFO]: hello world
console.log(debugLog("Something went wrong")); // [DEBUG]: Something went wrong
console.log(infoLog("Another info log")); // [INFO]: Another info log
console.log(errorLog("Critical failure!")); // [ERROR]: Critical failure!

// =====================================================================
// Ex2: Counter with Private State

// Instructions:
// Implement Counter, which returns an object with methods:
// increment(): Increases the counter by 1
// decrement(): Decreases the counter by 1
// reset(): Resets the counter to 0
// getValue(): Returns the current value
// The counter value should not be directly accessible outside the function.

function Counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    reset: function () {
      count = 0;
    },
    getValue: function () {
      return count;
    },
  };
}

const counter = Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Should print 2
counter.decrement();
console.log(counter.getValue()); // Should print 1
counter.reset();
console.log(counter.getValue()); // Should print 0

// =====================================================================
// Ex3: Create a Timer with Start, Pause & Reset
// Instructions:
// Implement Timer(), which returns an object with these methods:
// start(): Starts the timer
// pause(): Pauses the timer
// reset(): Resets the timer to 0
// The timer should print the elapsed time every second when running.
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
