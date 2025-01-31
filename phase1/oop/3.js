class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  clear() {
    this.stack = [];
  }

  peak() {
    this.stack.length - 1;
  }

  size() {
    return this.stack.length;
  }

  show() {
    console.log(this.stack);
  }

  prettyPrint() {
    [...this.stack].reverse().forEach((element) => {
      console.log(`|${element}|`);
    });
  }
}

// Example usage
const s1 = new Stack();
console.log(s1);
s1.push(10);
s1.push(8);
console.log("---------");
s1.prettyPrint();
console.log("---------");
console.log("Peak:", s1.peak());
console.log("Size:", s1.size());
