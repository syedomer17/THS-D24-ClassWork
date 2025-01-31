/*
queue data structure

first in first out 

enqueue: adding elements to the queue
dequeue: removing the elements from the queue

prettyPrint: human-readable format

show: display all elements in the queue
clear: remove all elements from the queue
peek: view the first element without removing it
size: get the number of elements in the queue
isEmpty: check if the queue is empty
*/

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return ;
    }
    return this.queue.shift();
  }
  prettyPrint() {
    let arr = [...this.queue]; 
    let str = ''
    arr.forEach((ele) =>console.log(`->${ele}<-`));
  }
  show() {
    console.log(this.queue);
  }
  clear() {
    this.queue = [];
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Queue is empty.");
      return 
    }
    return this.queue[0];

  }
  size() {
    return this.queue.length
  }

  
  isEmpty() {
   if (!this.queue.length) {
     return true;
   }
   return false;
  }
}


const s1 = new Queue();

console.log(s1);
s1.enqueue(10);
s1.enqueue(20);
s1.enqueue(30);
s1.prettyPrint();
console.log("---------");

console.log(s1.peek());
console.log("---------");

console.log(s1.size());
console.log("---------");

s1.dequeue();
s1.prettyPrint();
console.log("---------");
console.log(s1.isEmpty());
console.log("---------");

s1.clear();
s1.prettyPrint();
console.log("--------");