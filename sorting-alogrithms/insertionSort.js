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

const insertionSort = (arr) => {
  // Start by looping from secod element in array as we deem the first element in
  // the array to be the smallest
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];

    // The sorted portion of the array is built up from the left
    // To find the correct index we need to insert the current element
    // into a new index so by setting j - 1 we are only looking into
    // the sorted portion of the array
    let j = i - 1;
    // Compare current element with the one before it which is why we have j minus 1
    while (j >= 0 && arr[j] > element) {
      counter++;
      // While the current previous element at j is larger than element
      // we move that larger element to the right by reassigning arr[j + 1] to arr[j]
      arr[j + 1] = arr[j];
      j--;
    }
    // As we have overwrote elements previous index we need to insert it back in
    // The plus one here also covers the case where the element is already largest
    // as j is i - 1 originally, so to put it back in its original position we add 1
    arr[j + 1] = element;
  }
  return arr;
};

// console.log(insertionSort([6, 2, 4, 10, 5]));

// console.log(sortTwoArrays([3, 5, 2, 6, -2, 20, 3], [9, 1, 2], insertionSort));

// console.log(counter);
