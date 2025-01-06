const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  rootNode

  getUnderlyingList() {
    return this.rootNode
  }

  enqueue(value) {
    const listNode = new ListNode(value)
    if (!this.rootNode) {
      this.rootNode = listNode
      return
    }

    let node = this.rootNode

    while (true) {
      if (!node) {
        break
      }
      if (!node.next) {
        node.next = listNode
        break
      }
      node = node.next
    }
  }

  dequeue() {
    if (!this.rootNode) {
      return null
    }
    const rootValue = this.rootNode.value

    this.rootNode = this.rootNode.next

    return rootValue
  }
}

module.exports = {
  Queue
};
