/**
 * Linked lists contains a head, tail and length property and does not have indexes
 *
 * Each element is a node which stores data and points to the next node
 *
 * Big O
 *
 * Insertion - O(1) (constant)
 * Removal - O(1) if we are popping, or O(n) if we want to remove a specific node
 * Searching - O(n)
 * Access - O(n)
 */

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(params) {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Need to account for edge case if there isn't a current head, in that case
  // the new node becomes the head and tail
  push(val) {
    // Create a new node using the value passed to the function
    const newNode = new Node(val)
    // If there is no head set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode
    } else {
      // Otherwise set the next property on the tail to be the new node
      this.tail.next = newNode
    }
    // Set the tail property to be the newly created node
    this.tail = newNode
    // Increment length
    this.length++
    // Return list
    return this
  }

  // Removes node from the tail
  pop() {
    // If there are no nodes in the list return undefined
    if (!this.head) return undefined
    // Need to keep track of not only the last node but also the one before it
    let current = this.head
    let newTail = current
    // Loop through the list until we reach the tail
    while (current.next) {
      newTail = current
      current = current.next
    }
    // Set the tail to be the 2nd to last node
    this.tail = newTail
    // Set the next property of the 2nd to last node to be null
    this.tail.next = null
    // Decrement the length by one
    this.length--
    // If our length is now 1 we need to set head and tail to null
    if (!this.length) {
      this.head = null
      this.tail = null
    }
    // Return the removed node
    return current
  }

  // Removes the head
  shift() {
    // If there is no head return undefined
    if (!this.head) return undefined
    // Store the current head property in a variable
    const oldHead = this.head
    // Set the head property to be the current heads next property
    this.head = oldHead.next
    // Decrement the length by 1
    this.length--
    // If the list is now empty our tail needs to be set to null too
    if (!this.length) {
      this.tail = null
    }
    // Return the removed node
    return oldHead
  }

  // Inserts a new head
  unshift(val) {
    // Create a new node using the value passed to the function
    const newNode = new Node(val)
    // If there is no head set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // Otherwise set the newly created nodes next property to be the current head
      newNode.next = this.head
      // Set the head property to be that of the newly created node
      this.head = newNode
    }
    // Increment its length by 1
    this.length++
    // Return the list
    return this
  }

  // Gets a node at a certain index
  get(index, counter = 0, node = this.head) {
    // If the index is less than or greater than or equal to the length of the list return null
    if (index < 0 || index >= this.length) return null
    if (index === counter) return node
    // Recursively traverse the list until our counter reaches the specified index
    return this.get(index, ++counter, node.next)
  }

  // Sets a node at a certain index
  set(index, val) {
    // Use get() to find the specific node
    const foundNode = this.get(index)
    // If a node is found set the value of that node to be the value passed to the function
    if (foundNode) {
      foundNode.val = val
      // Return true
      return true
    }
    // If no node is found return false
    return false
  }

  // Inserts a node at a certain index
  insert(index, val) {
    // If the index is less than zero or greater than the length return false
    if (index < 0 || index > this.length) return false
    // If the index is 0 use unshift()
    // The double bang '!!' operator converts the return value to true
    if (index === 0) return !!this.unshift(val)
    // If the index is equal the length use push()
    if (index === this.length) return !!this.push(val)
    // Otherwise create a new node with the value passed to the function
    const newNode = new Node(val)
    // Using get() to retrieve the node at the previous index that we want
    const prevNode = this.get(index - 1)
    // set the next property on the new node to be the previous next
    newNode.next = prevNode.next
    // Set the next property on that node to be the new node
    prevNode.next = newNode
    // Increment the length
    this.length++
    // Return true
    return true
  }

  // Removes a node at a certain index
  remove(index) {
    // If the index is less than zero or greater than the length return false
    if (index < 0 || index > this.length) return false
    // If the index is 0 use shift()
    if (index === 0) return this.shift()
    // If the index is equal the length use pop()
    if (index === this.length) return this.pop()
    // Otherwise use get() to retrieve the node at the previous index that we want
    const prevNode = this.get(index - 1)
    // The node we want to remove is the previous nodes next property
    const nodeToBeRemoved = prevNode.next
    // Set the next property on that previous node to be the next of the next node
    prevNode.next = nodeToBeRemoved.next
    // Decrement the length
    this.length--
    // Return the removed node
    return nodeToBeRemoved
  }

  // Reverses list
  // To reverse a linked list you need to keep track of three things, the current node, its next node and the previous node, the latter two originally being set to null
  // We have to store the current nodes next node in a variable as we overwrite the current nodes next to be the previous node
  // we then move forward by firstly setting the previous node to current and
  // secondly we set the current node to its old next node which we saved in a variable
  reverse(node = this.head) {
    // Using recursion
    if (!node.next) return node
    // Get the last node by recursively traversing the list
    const lastNode = this.reverse(node.next)
    // As each call to reverse gets popped off the call stack we can utilise that we still have access to the previous nodes that were passed as variables
    // Because of this we can set the current nodes next next property to point at the current node
    // A -> B -> C
    // The current nodes next next property
    // B -> A
    node.next.next = node
    // We sever the current nodes next property as its being reversed so its next property is being set in a before call from the line above
    node.next = null
    // Our head becomes the last node
    this.head = lastNode
    // The tail becomes the first node we called the function with, which is its head
    this.tail = node
    // Return the list
    return this

    // Provided solution
    // Create a current variable and set it to the head
    const current = this.head
    // Swap the head and tail
    this.head = this.tail
    this.tail = current
    // Create a variable called prev
    let prev = null
    // Create a variable called next
    let next = null
    // Loop through list
    for (let i = 0; i < this.length; i++) {
      // Set next to be the next property on whatever node is current
      next = current.next
      // Set the next property on the current node to be whatever previous is
      current.next = prev
      // Set previous to be the value of the current node
      prev = current
      // Set the current node to be the value of the next variable
      current = next
    }
    return this
  }

  // Can also be solved using a recursive tail
  reverseLinkedList(list = this.head, prev = null) {
    // need to keep track of previous
    // need to keep track of next
    if (!list) return prev
    const next = list.next
    list.next = prev

    return this.reverseLinkedList(next, list)
  }
}

const list = new SinglyLinkedList()
list.push(20).push(30).push("hello").push(100).push(50)

list.set(2, "HELLO WORLD I MEAN LOL")
// list.insert(2, "GAME OVER MAN")

console.log(JSON.stringify(list, null, 4))

list.reverseLinkedList()

console.log(JSON.stringify(list, null, 4))
