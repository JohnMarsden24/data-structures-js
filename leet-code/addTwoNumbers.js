/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself
 */

/**
 * Definition for singly-linked list.
 */
const ListNode = (val = 0, next = null) => ({
  val: val,
  next: next,
})

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const l1Arr = []
  const l2Arr = []

  while (l1) {
    l1Arr.unshift(l1.val)
    l1 = l1.next ? l1.next : null
  }

  while (l2) {
    l2Arr.unshift(l2.val)
    l2 = l2.next ? l2.next : null
  }

  const num1 = +l1Arr.join("")
  const num2 = +l2Arr.join("")

  const total = (+l1Arr.join("") + +l2Arr.join("")).toString().split("")
  // const l1Reversed = reverseList(l1)
  // const l2Reversed = reverseList(l2)

  const head = createList(total)
  return head
}

const createList = arr =>
  arr.reduce((acc, curr) => {
    if (acc == null) {
      acc = ListNode(curr)
    } else {
      acc = ListNode(curr, acc)
    }
    return acc
  }, null)

// const reverseList = node => {
//   if (!node.next) {
//     return node
//   }

//   const lastNode = reverseList(node.next)
//   node.next.next = node
//   node.next = null
//   return lastNode
// }

const l1 = createList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
])

const l2 = createList([5, 6, 4])

console.log(addTwoNumbers(l1, l2))
