/** Node: node for a deque. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Deque */

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the deque. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      newNode.prev = this.last;
      this.last = newNode;
    }
    this.size++;
  }

  /** pop(): remove the node from the end of the deque
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error("no items");
    const node = this.last;
    this.last = node.prev;
    this.last.next = null;
    this.size--;
    return node.val;
  }

  /** unshift(val): add new value to start of the deque. Returns undefined. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      newNode.next = this.first;
      newNode.next.prev = newNode;
      this.first = newNode;
    }
    this.size++;
  }

  /** shift(): remove the node from the start of the deque
   * and return its value. Should throw an error if the deque is empty. */

  shift() {
    if (!this.first) throw new Error("no items");
    const node = this.first;
    this.first = node.next;
    this.first.prev = null;
    this.size--;
    if (this.size === 1) this.last = this.first;
    return node.val;
  }

  /** peekLeft(): return the value of the first node in the queue. */

  peekLeft() {
    if (!this.first) throw new Error("no items");
    return this.first.val;
  }

  /** peekRight(): return the value of the first node in the queue. */

  peekRight() {
    if (!this.first) throw new Error("no items");
    return this.last.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Deque;
