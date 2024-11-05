// 14.2 Queue Class
// enqueue(item) : add element into queue
// dequeue(): take element out of queue, FIFO
// peek(): check for the element at the front of the queue, without removing it from queue
// isEmpty(): return true if queue is empty

class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element) {
      this.queue.push(element);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    getLength() {
      return this.queue.length;
    }
  
    isEmpty() {
      return !this.queue.length;
    }
  }
  
  const carsQueue = new Queue();
  carsQueue.enqueue("Audi");
  carsQueue.enqueue("Kia");
  carsQueue.enqueue("Ford");
  
  console.log("carsQueue 111", carsQueue);
  carsQueue.dequeue();
  console.log("carsQueue 222", carsQueue);
  carsQueue.dequeue();
  console.log("carsQueue 333", carsQueue);
  console.log("peek", carsQueue.peek());