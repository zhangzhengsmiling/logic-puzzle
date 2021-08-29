
class Queue {
  _stack1 = [];
  _stack2 = [];

  enqueue(val) {
    const empty = this._stack1.length === 0 ? this._stack1 : this._stack2;
    const nonempty = empty === this._stack1 ? this._stack2 : this._stack1;
    while(nonempty.length > 0) {
      empty.push(nonempty.pop());
    }
    empty.push(val);
    while(empty.length > 0) {
      nonempty.push(empty.pop());
    }
  }

  dequeue() {
    const empty = this._stack1.length === 0 ? this._stack1 : this._stack2;
    const nonempty = empty === this._stack1 ? this._stack2 : this._stack1;
    return nonempty.pop();
  }

}

const q = new Queue();
q.enqueue(100);
q.enqueue(200);
q.enqueue(400);
console.log(q.dequeue());
q.enqueue(300);
console.log(q.dequeue())
console.log(q.dequeue())

// console.log(v);

