/**
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 * Implement the MyQueue class:
 * 1. void push(int x) Pushes element x to the back of the queue.
 * 2. int pop() Removes the element from the front of the queue and returns it.
 * 3. int peek() Returns the element at the front of the queue.
 * 4. boolean empty() Returns true if the queue is empty, false otherwise.
 */

// Amortized time complexity O(1) and O(n) space complexity
function MyQueue() {
  this.stack1 = [];
  this.stack2 = [];
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.move();
  return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.move();
  return this.stack2.at(this.stack2.length - 1);
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * @return {void}
 */
MyQueue.prototype.move = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
console.log(myQueue.stack1);
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue.stack1);
console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.stack2);
console.log(myQueue.empty()); // return false
