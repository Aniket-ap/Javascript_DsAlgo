class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const q1 = new Queue();
q1.add(1);
q1.add(2);
q1.add(3);
q1.remove();
console.log(q1.peek());

console.log(q1.data);
