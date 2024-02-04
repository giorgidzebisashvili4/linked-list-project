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
  head() {}
}

let test1 = new LinkedList(); // linkedList {head: null}
console.log(test1);

test1.append("giorgi"); // it is now head first node
test1.append("davit"); // it is now second node
test1.append("buta");
console.log(test1);
test1.prepend("irakli");
console.log(test1);
console.log(test1.size());
