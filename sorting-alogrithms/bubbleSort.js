const { sortTwoArrays } = require("./sortTwoArrays");

/**
 * Time complexity
 *
 * Best   Average   Worse
 * O(n)   O(n x n)  O(n x n)
 *
 * Space complexity
 * O(1)
 */

// Using double nested loops but decreasing inner loop size on each pass
// const bubbleSort = (arr) => {
//   let counter = 0;
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       counter++;
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   console.log(counter);
//   return arr;
// };

let counter = 0;

// Using a short circuit to stop looping
const bubbleSort = (arr) => {
  let noSwaps;
  // Start by looping from end of array
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // Start inner loop from beginning of array
    for (let j = 0; j < i - 1; j++) {
      counter++;
      // If the value at j is larger than the next value we swap
      // thus bubbling the larger value towards the end of the array
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6]));

console.log(sortTwoArrays([3, 5, 2, 6, -2, 20, 3], [9, 1, 2], bubbleSort));

console.log(counter);
