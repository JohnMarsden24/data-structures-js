/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Example 1:
 * Input: l1 = [1,2,4], l2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: l1 = [], l2 = []
 * Output: []
 *
 * Example 3:
 * Input: l1 = [], l2 = [0]
 * Output: [0]
 *
 * Constraints:
 * The number of nodes in both lists is in the range [0, 50]
 * -100 <= Node.val <= 100
 * Both l1 and l2 are sorted in non-decreasing order.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const checkForMinimum = (node1, node2) => {
  if (!node1) return false;
  if (!node2) return true;
  return node1.val <= node2.val;
};

const mergeTwoLists = function (l1, l2) {
  // Create initial head using the minimum value of both lists head
  let head;

  if (!l1) {
    return l2;
  } else if (!l2) {
    return l1;
  }

  if (checkForMinimum(l1, l2)) {
    head = new ListNode(l1.val);
    l1 = l1.next;
  } else {
    head = new ListNode(l2.val);
    l2 = l2.next;
  }
  let headCopy = head;

  // While both lists have a next we iterate through them
  while (l1 || l2) {
    // Depending on which list the minimum value came from
    // we set that list as its current nodes next
    if (checkForMinimum(l1, l2)) {
      headCopy.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      headCopy.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    headCopy = headCopy.next;
  }

  return head;
};

// Recursive solutionn
const mergeTwoListsRecursion = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  if (l1.val <= l2.val) {
    l1.next = mergeTwoListsRecursion(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoListsRecursion(l1, l2.next);
    return l2;
  }
};

const createList = (vals) => {
  return vals.reverse().reduce((prev, curr) => {
    if (!prev) {
      prev = new ListNode(curr);
    } else {
      prev = new ListNode(curr, prev);
    }
    return prev;
  }, null);
};

const l1 = createList([1, 2, 4]);
const l2 = createList([1, 3, 4]);

// console.log(JSON.stringify(mergeTwoLists(l1, l2), null, 4));
console.log(JSON.stringify(mergeTwoListsRecursion(l1, l2), null, 4));
