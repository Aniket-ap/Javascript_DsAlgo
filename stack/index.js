class Stack {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.push(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

const s1 = new Stack();
s1.add(1);
s1.add(2);
s1.add(3);

s1.remove();
console.log(s1.peek());

console.log(s1.data);
