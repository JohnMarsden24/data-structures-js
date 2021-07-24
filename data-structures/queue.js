/**
 * FIFO - First in first out
 *
 * Insertion - O(1)
 * Removal - O(1)
 * Searching - O(n)
 * Access - O(n)
 */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(val) {
    // Create a new node with the value passed in
    const newNode = new Node(val)
    // If there are no nodes in the queue set this node to be the first and last property of the queue
    if (!this.size) {
      this.first = newNode
    } else {
      // Else set the next property on the current last to be the new node
      // Set the last property of the queue to be the new node
      this.last.next = newNode
    }
    this.last = newNode
    // Increment size
    this.size++
    return this.size
  }

  dequeue() {
    // If queue is empty return null
    if (!this.size) return null
    // Store first property in a variable
    const oldFirst = this.first
    // If the queues size is 0 set both first and last to null
    if (this.size === 1) {
      this.last = null
    }
    // Set the first property to be the next property of the first
    this.first = oldFirst.next
    // Decrement its size
    this.size--
    // Return the original first property
    return oldFirst.val
  }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.dequeue())
console.log(queue)
