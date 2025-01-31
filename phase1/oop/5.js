/*
Linked List

A Node consist of two things
1. Data
2. next

Operations:
show
append
prepend

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    let newNode = new Node(data);
    console.log(`${newNode.data} | ${newNode.next}`);

    //if the node is the first element
    if (!this.head) {
      this.head = newNode;
      return;
    }

    //the nodes exist already
    let current = this.head;

    // traverse the linked list until the current.next is null
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(data) {
    let newNode = new Node(data);
    console.log(`${newNode.data} | ${newNode.next}`);

    newNode.next = this.head;
    this.head = newNode;
  }

  show() {
    let linkedListNodes = [];

    let current = this.head;
    linkedListNodes.push(current.data);

    while (current.next) {
      current = current.next;
      linkedListNodes.push(current.data);
    }

    console.log(linkedListNodes);
  }
}

let ll = new LinkedList();

ll.append("first");
ll.append("second");
ll.append("third");
ll.append("last");
ll.prepend("zero");
ll.prepend("zero zero");
ll.show();
