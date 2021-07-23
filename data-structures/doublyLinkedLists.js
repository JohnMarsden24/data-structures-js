/**
 * Big O
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
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    // Create a new node with the value passed to the function
    const newNode = new Node(val)
    // If the head property is null set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode
    } else {
      // If not set the next property on the tail to be that node
      this.tail.next = newNode
      // Set the previous property on the newly created node to be the tail
      newNode.prev = this.tail
    }
    // Set the tail to be the newly created node
    this.tail = newNode
    // Increment the length
    this.length++
    // Return the list
    return this
  }

  pop() {
    // If there is no head return undefined
    if (!this.head) return undefined
    // Store the current tail in a variable to return later
    const oldTail = this.tail
    // Update the tail to be the previous node
    this.tail = oldTail.prev
    // If there is now no tail (as in it is null) it meant the list only contained one node
    // So by checking if it exists we can set set the tails next property to null or the head to be equal to the tail which is null
    this.tail ? (this.tail.next = null) : (this.head = this.tail)
    // Set previous tails previous to null
    oldTail.prev = null
    // Decrement the length
    this.length--
    // Return the value we removed
    return oldTail
  }

  // Removes a node from the beginning of the list
  shift() {
    // If there is no head return undefined
    if (!this.head) return undefined
    // Store the current head property in a variable
    const oldHead = this.head
    // Update the head to be the next of the old head
    this.head = oldHead.next
    // If there is now no head (as in it is null) it meant the list only contained one node
    // So by checking if it exists we can set set the heads previous property to null or the tail to be equal to the head which is null
    this.head ? (this.head.prev = null) : (this.tail = this.head)
    // Set the old heads next to null
    oldHead.next = null
    // Decrement the length
    this.length--
    // Return the old head
    return oldHead
  }

  // Adds a node into the beginning of the list
  unshift(val) {
    // Create a new node with the value passed to the function
    const newNode = new Node(val)
    // If the length is 0 the new node becomes to the head and tail
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      // Else the heads previous property should point at the new node
      this.head.prev = newNode
      // Set the new nodes next property to the old head
      newNode.next = this.head
      // Update the head to be the new node
      this.head = newNode
    }
    // Increment the length
    this.length++
    // Return the list
    return this
  }

  // Get a specific node from an index
  get(index) {
    // If the index is less than 0 or greater or equal to the length return null
    if (index < 0 || index >= this.length) return null
    // If the index is less than or equal to half of the lists length
    let currentNode
    let counter = 0
    if (index <= this.length / 2) {
      // Loop starting from the head going towards the tail
      currentNode = this.head
      while (counter !== index) {
        currentNode = currentNode.next
        counter++
      }
    } else {
      // Else loop starting from the tail going towards the head
      currentNode = this.tail
      counter = this.length - 1
      while (counter !== index) {
        currentNode = currentNode.prev
        counter--
      }
    }
    // Return the node once found
    return currentNode
  }

  // Takes an index and data
  set(index, val) {
    // Create a variable which is the result of the get method at the index passed to the function
    const foundNode = this.get(index)
    // If the get method returns a valid node set the value of that node to be the value passed to the function
    if (foundNode) {
      foundNode.val = val
      // return true
      return true
    }
    // Otherwise return false
    return false
  }

  // Inserts a new node at a specific index
  insert(index, val) {
    // If the index is less than zero or greater than the length return false
    if (index < 0 || index > this.length) return false
    // If the index is 0 we can use unshift method
    if (index === 0) return !!this.unshift(val)
    // I the index is the same as the length we can use push method
    if (index === this.length) return !!this.push(val)
    const newNode = new Node(val)
    // Use the get method to access the previous node at index - 1
    const foundNode = this.get(index - 1)
    // Set the next and prev properties on the surrounding nodes to link everything together
    newNode.next = foundNode.next
    newNode.next.prev = newNode
    newNode.prev = foundNode
    foundNode.next = newNode
    // Increment the length
    this.length++
    // Return true
    return true
  }

  // Takes an index and removes the node at that index
  remove(index) {
    // If the index is less than zero or greater than or equal to the length return false
    if (index < 0 || index >= this.length) return false
    // If the index is 0 we can use shift method
    if (index === 0) return this.shift()
    // I the index is the same as the length we can use pop method
    if (index === this.length - 1) return this.pop()
    // Use the get method to access the previous node at index
    const foundNode = this.get(index)
    // Update the next and previous properties to remove the found node from the list
    foundNode.next.prev = foundNode.prev
    foundNode.prev.next = foundNode.next
    // Set next and prev to null on the found node
    foundNode.next = null
    foundNode.prev = null
    // Decrement the length
    this.length--
    // Return removed node
    return foundNode
  }
}

const list = new DoublyLinkedList()

list.push(10).push(20).push(30).push(40).push(50).push(60)

console.log(list.remove(0))
console.log(list)
