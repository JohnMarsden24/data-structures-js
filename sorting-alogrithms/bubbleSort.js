const { sortTwoArrays } = require("./sortTwoArrays");

/**
 * Time complexity
 *
 * Best   Average   Worse
 * O(n)   O(n ^ 2)  O(n ^ 2)
 *
 * Space complexity
 * O(1)
 */

let counter = 0;

// Using a short circuit to stop looping
const bubbleSort = (arr) => {
  // let noSwaps;
  // // Start by looping from end of array as we can then reduce the range
  // // of the inner loop as we know the items at the end of the array
  // // are already sorted
  // for (let i = arr.length; i > 0; i--) {
  //   // We use a flag to prevent unnecessary iterations
  //   noSwaps = true;
  //   // Start inner loop from beginning of array
  //   for (let j = 0; j < i - 1; j++) {
  //     counter++;
  //     // If the value at j is larger than the next value we swap
  //     // thus bubbling the larger value towards the end of the array
  //     if (arr[j] > arr[j + 1]) {
  //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //       noSwaps = false;
  //     }
  //   }
  //   if (noSwaps) break;
  // }
  // return arr;

  // Using a while loop with an ever decreasing inner loop size
  // as we do not need to iterate over already sorted elements
  let swapping = true;
  let sortedLength = arr.length;
  while (swapping) {
    swapping = false;

    for (let i = 0; i < sortedLength; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapping = true;
      }
    }
    sortedLength++;
  }
  return arr;
};

console.log(bubbleSort([6, 4, 5, 3, 2, 1]));

// console.log(sortTwoArrays([3, 5, 2, 6, -2, 20, 3], [9, 1, 2], bubbleSort));
// console.log(bubbleSort([6, 4, 5, 3, 8, 1]));

// console.log(counter);
