/**
 * Root - top node in a tree
 * Child - node directly connected to another node when moving away from the root
 * Parent - the opposite of a child
 * Siblings - a group of nodes with the same parent
 * Leaf - a node with no children
 * Edge - the connection between one node and the another
 *
 * Binary search tree - BST
 * Data is kept in sorted order
 * Every parent node has at most two children
 * Every node to the left of the parent node is always less than the parent
 * Every node to the right of the parent node is always greater than the parent
 *
 * Trees are nonlinear
 * Only parent child relationship, not siblings
 *
 *
 *               Best     Average   Worse
 * Insertion   O(log n)   O(log n)  O(n)
 * Searching   O(log n)   O(log n)  O(n)
 */

class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    // Create a new node
    const newNode = new Node(val)
    // If there is no root the root now becomes the new nope
    if (!this.root) {
      this.root = newNode
      return this
    }
    // Else starting at the root we loop through till we find the correct position to insert
    let currentNode = this.root
    let inserting = true
    while (inserting) {
      if (val === currentNode.val) return undefined
      // Check if the value of the new node is greater than or less than the value of the root
      if (newNode.val < currentNode.val) {
        // If it is less check to see if there is a node to the left
        if (currentNode.left) {
          // If there is move to that node and repeat these steps
          currentNode = currentNode.left
        } else {
          // Else add a node as the left property
          currentNode.left = newNode
          inserting = false
        }
      } else {
        // If it's greater check to see if there is a node to the right
        if (currentNode.right) {
          // If there is move to that node and repeat these steps
          currentNode = currentNode.right
        } else {
          // Else add a node as the right property
          currentNode.right = newNode
          inserting = false
        }
      }
    }
    return this
  }

  insertRecursively(val, current = this.root) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }
    if (val === current.val) return undefined
    if (val < current.val) {
      if (current.left) {
        return this.insertRecursively(val, current.left)
      } else {
        current.left = new Node(val)
        return this
      }
    } else {
      if (current.right) {
        return this.insertRecursively(val, current.right)
      } else {
        current.right = new Node(val)
        return this
      }
    }
  }

  find(val) {
    // Starting at the root
    let currentNode = this.root
    // While there is a current node we traverse left or right
    while (currentNode) {
      // If current node is equal to the value we are looking for we are done searching
      if (currentNode.val === val) {
        return true
        // Else check to see if the value is greater than or less than the value of the root
      } else if (val > currentNode.val) {
        // If it is greater move to the right node and continue with the loop
        currentNode = currentNode.right
      } else if (val < currentNode.val) {
        // Else if it is less move to that node and continue with the loop
        currentNode = currentNode.left
      }
    }
    // If current node has been set to null in the previous iteration we break out of the loop and return false
    return false
  }

  findRecursively(val, current = this.root) {
    if (!current) return false
    if (current.val === val) return true
    current = current.val > val ? current.left : current.right
    return this.findRecursively(val, current)
  }

  // Space complexity can become an issue as the queue grows
  breadthFirstSearch() {
    // Create an array to store all the nodes we visit
    const allNodes = []
    // Create a queue and variable to store the values of nodes visited
    // A queue is used because it is a first in first out strategy as we want to visit the top most nodes first
    // Place the root node in the queue
    const visited = [this.root]
    // Loop as long as there is anything in the queue
    while (visited.length) {
      // Dequeue a node and push the value of the node into a variable that stores the nodes
      const visitedNode = visited.shift()
      // If there is a left property on the dequeued node add it to the queue
      if (visitedNode.left) visited.push(visitedNode.left)
      // If there is a right property on the dequeued node add it to the queue
      if (visitedNode.right) visited.push(visitedNode.right)
      allNodes.push(visitedNode.val)
    }
    // Return the variable that stores our values
    return allNodes
  }

  breadthFirstSearchRecursively(visited = [this.root], allNodes = []) {
    if (!visited.length) return allNodes
    const visitedNode = visited.shift()
    if (visitedNode.left) visited.push(visitedNode.left)
    if (visitedNode.right) visited.push(visitedNode.right)
    allNodes.push(visitedNode.val)
    return this.breadthFirstSearchRecursively(visited, allNodes)
  }

  // PreOrder we visit the parent node and then it's children starting from the left hand side
  depthFirstSearchPreOrder() {
    // Create an array that stores all the nodes we have visited
    const allNodes = []
    // Store the root in a variable
    const currentNode = this.root
    // Helper function which accepts a node
    const traverse = node => {
      // Push the value of the node to the variable that stores the values
      allNodes.push(node.val)
      // If the node has a left property call the helper function with the left property of the node
      if (node.left) traverse(node.left)
      // If the node has a right property call the helper function with the right property of the node
      if (node.right) traverse(node.right)
    }
    traverse(currentNode)
    // Return the array
    return allNodes
  }

  // PostOrder we visit all child nodes first and then we visit the parent node
  depthFirstSearchPostOrder() {
    // Create an array that stores all the nodes we have visited
    const allNodes = []
    // Store the root in a variable
    const currentNode = this.root
    // Helper function which accepts a node
    const traverse = node => {
      // If the node has a left property call the helper function with the left property of the node
      if (node.left) traverse(node.left)
      // If the node has a right property call the helper function with the right property of the node
      if (node.right) traverse(node.right)
      // Push the value of the node to the variable that stores the values
      allNodes.push(node.val)
    }
    traverse(currentNode)
    // Return the array
    return allNodes
  }

  // InOrder we visit the left child first and then we visit the parent and then we visit the right child
  depthFirstSearchInOrder() {
    // Create an array that stores all the nodes we have visited
    const allNodes = []
    // Store the root in a variable
    const currentNode = this.root
    // Helper function which accepts a node
    const traverse = node => {
      // If the node has a left property call the helper function with the left property of the node
      if (node.left) traverse(node.left)
      // Push the value of the node to the variable that stores the values
      allNodes.push(node.val)
      // If the node has a right property call the helper function with the right property of the node
      if (node.right) traverse(node.right)
    }
    traverse(currentNode)
    // Return the array
    return allNodes
  }

  // Depending on where we put node.val we change it from pre to post order DFS
  depthFirstSearchRecursively(node = this.root) {
    if (!node) return []
    return [
      ...this.depthFirstSearchRecursively(node.left),
      node.val,
      ...this.depthFirstSearchRecursively(node.right),
    ]
  }
}

const bst = new BinarySearchTree()
bst.insertRecursively(10)
bst.insertRecursively(6)
bst.insertRecursively(15)
bst.insertRecursively(3)
bst.insertRecursively(8)
bst.insertRecursively(20)
bst.insertRecursively(2)

console.log(bst.depthFirstSearchInOrder())
// console.log(JSON.stringify(bst.breadthFirstSearch(), null, 4))
