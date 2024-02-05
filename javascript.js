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
  pop() {
    if (!this.head) {
      return; // Do nothing if the list is empty.
    }
    if (!this.head.nextNode) {
      this.head = null; // If there's only one node, set the head to null.
      return;
    }
    let current = this.head;
    let prev = null;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null; // Remove the reference to the last node.
  }
  contains(searchedValue) {
    let current = this.head;
    while (current) {
      if (current.value === searchedValue) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }
  toString() {
    let current = this.head;
    let string = "";
    if (!current) {
      return "null";
    }
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += "null";
    return string;
  }
  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid index");
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    // Traverse to the specified index
    while (currentIndex < index) {
      prev = current;
      current = current.nextNode;
      currentIndex++;
    }

    // Insert the new node at the specified index
    prev.nextNode = newNode;
    newNode.nextNode = current;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("Invalid index");
      return;
    }

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let currentIndex = 0;

    while (currentIndex < index) {
      prev = current;
      current = current.nextNode;
      currentIndex++;
    }

    prev.nextNode = current.nextNode;
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
test.pop();
console.log(test.tail());
console.log(test.contains("davit"));
console.log(test.find("davit"));
test.append("buta is back");
test.insertAt("temo", 2);
test.removeAt(3);
console.log(test.toString());
