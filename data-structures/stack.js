/**
 * LIFO - Last in first out
 *
 * A stack is an abstract concept, not a defined way of building it
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

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(val) {
    // The function should accept a value
    // Create a new node with that value
    const newNode = new Node(val)
    // If there are no nodes in the stack set the first and last property to be the newly created node
    if (!this.first) {
      this.last = newNode
    } else {
      // If there is at least one node, create a variable that stores the current first property on the stack
      let oldFirst = this.first
      // Set the next property on the node to be the previously created variable
      newNode.next = oldFirst
    }
    // Reset the first property to be the newly created node
    this.first = newNode
    // Increment size by 1
    this.size++
    return this.size
  }

  pop() {
    // If there are no nodes in the stack return null
    if (!this.size) return null
    // Else create a temporary variable to store the first property on the stack
    const oldFirst = this.first
    // If there is only 1 node set the first and last property to be null
    if (this.size === 1) {
      this.last = null
    }
    // If there is more than one node set the first property to be the next property on the current first
    this.first = oldFirst.next
    // Decrement the size by 1
    this.size--
    // Return the value of the node removed
    return oldFirst.val
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack)
