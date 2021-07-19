const { sortTwoArrays } = require("./sortTwoArrays");

/**
 * Time complexity
 *
 * Best   Average   Worse
 * O(n x n)   O(n x n)  O(n x n)
 *
 * Space complexity
 * O(1)
 */

let counter = 0;
const selectionSort = (arr) => {
  // Store first element as the minimum value we've seen so far
  for (let i = 0; i < arr.length; i++) {
    let minimum = i;
    // Compare this element to all remaining elements until we find a smaller value
    for (let j = i + 1; j < arr.length; j++) {
      counter++;
      // If a smaller number is found, reassign minimum to that value
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    // If the minimum index is not equal to the one we started at we swap the values
    if (minimum !== i) {
      [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
    }
  }

  return arr;
};

// console.log(selectionSort([5, 3, 1, 2, 6, 1]));

console.log(sortTwoArrays([3, 5, 2, 6, -2, 20, 3], [9, 1, 2], selectionSort));

console.log(counter);
