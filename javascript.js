// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}
// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to add a new node with the given value to the end of the list.
  append(value) {
    const newNode = new Node(value); // newNode { this.value = value; this.nextNode = null; }

    if (!this.head) {
      // when first node comes in
      this.head = newNode;
    } else {
      // when first nude exist
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value); // newNode { this.value = value; this.nextNode = null; }

    if (!this.head) {
      // when first node comes in
      this.head = newNode;
    } else {
      // when first nude exist
      let current = this.head;
      this.head = newNode;
      this.head.nextNode = current;
    }
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }
  getHead() {
    return this.head;
  }
  tail() {
    let current = this.head;
    if (this.head) {
      while (current.nextNode) {
        current = current.nextNode;
      }
      return current;
    }
  }
  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      if (!current) {
        return null;
      }
      current = current.nextNode;
    }
    return current;
  }
}

let test = new LinkedList(); // linkedList {head: null}
console.log(test);

test.append("giorgi"); // it is now head first node
test.append("davit"); // it is now second node
test.append("buta");
console.log(test);
test.prepend("irakli");
console.log(test);
console.log(test.size());
console.log(test.getHead());
console.log(test.tail());
console.log(test.at(2));
