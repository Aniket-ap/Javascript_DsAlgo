class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // TODO:INSERTFIRST
  insertFirst(data) {
    // const node = new Node(data, this.head);
    // this.head = node;
    this.head = new Node(data, this.head);
  }

  // TODO:GETSIZE
  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  // TODO:GET_FIRST_ELEMENT
  getFirst() {
    return this.head;
  }

  // TODO:GET_LAST_ELEMENT
  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }

      node = node.next;
    }
  }

  // TODO:CLEAR_LIST
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // TODO: there are some existing node
      last.next = new Node(data);
    } else {
      // Todo: the node is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
}

const list = new LinkedList();

// size()
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list.size());
// console.log(list);

// getFirst()
// list.insertFirst("a");
// list.insertFirst("b");
// console.log(list.getFirst());

// getLast()
// list.insertFirst("a");
// list.insertFirst("b");
// console.log(list.getLast());

// clear()
// list.insertFirst("a");
// list.insertFirst("b");
// list.clear();
// console.log(list.size()); // returns 0

// removeFirst()
// list.insertFirst("a");
// list.insertFirst("b");
// list.removeFirst();
// console.log(list.getFirst());

// removeLast()
// list.insertFirst("a");
// list.insertFirst("b");
// list.removeLast();
// console.log(list.size());
// console.log(list.getLast());

// insertLast()
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertLast("c");
// console.log(list.getLast());

// getAt()
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list.getAt(1));

// removeAt()
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// console.log(list.removeAt(1));
// console.log(list.getAt(1));

// insertAt()
// list.insertFirst("a");
// list.insertFirst("b");
// list.insertFirst("c");
// list.insertAt("Hi", 1);
// console.log(list.getAt(1));
