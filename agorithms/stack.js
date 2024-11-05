// 14.1 Stack Class
// push(item) : add element into stack
// pop(): take element out of stack, LIFO
// peek(): get the element at the front of the queue, without removing it from stack
// isEmpty(): return true if queue is empty

class Stack {
    constructor() {
      this.stack = [];
    }
  
    push(item) {
      return this.stack.push(item);
    }
  
    pop() {
      return this.stack.pop();
    }
  
    peek() {
      return this.stack[this.stack.length - 1];
    }
  
    getLength() {
      return this.stack.length;
    }
  
    isEmpty() {
      return !this.stack.length;
    }
  }
  
  const carStack = new Stack();
  carStack.push("Audi");
  carStack.push("Mercides");
  carStack.pop();
  console.log("111", carStack.isEmpty());
  carStack.pop();
  console.log("222", carStack.isEmpty());