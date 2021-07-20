/**
 * Merge sort works by recursively breaking down the array into individual arrays which are then
 * merged together and while being merged the values are put into a sorted order
 * This newly merged array is returned from the recursive call and repeated till the entire
 * array is sorted. So for example it would first merge and sort two arrays of 1 length into a single
 * array with a length of 2, it would then merge and sort two arrays of 2 length into a single array
 * with a length of 4, etc
 *
 * Time complexity
 *
 * Best         Average     Worse
 * O(n log n)   O(n log n)  O(n log n)
 *
 * log n because the amount of times we have to split the array grows in log 2 with the arrays length
 * e.g log 2 (8) = 3 explaination - 2 x 2 x 2 = 8
 * If we had an array of 32 elements we would have to split it 5 times to get it into individual elements
 *
 * O(n) because we are comparing each element in the array once, put the two together are hyou get O(n log n)
 *
 * Space complexity
 * O(n)
 */

const merge = (arr1, arr2) => {
  // Create empty array which we return
  const merged = [];
  // Create two pointers which we will use to iterate through the arrays
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  // While the pointers have not reached the end of their respective arrays we loop
  while (arr1Pointer < arr1.length || arr2Pointer < arr2.length) {
    // If the first value in the first array is smaller than the first value in the second array
    // or the arr2 pointer is larger or equal to its length which means we've reached the end
    // of arr2 we push that value to our new array
    if (arr1[arr1Pointer] < arr2[arr2Pointer] || arr2Pointer >= arr2.length) {
      merged.push(arr1[arr1Pointer]);
      // We increment the first array pointer
      arr1Pointer++;
    } else {
      merged.push(arr2[arr2Pointer]);
      arr2Pointer++;
    }
  }

  return merged;
};

const mergeSort = (arr) => {
  // Recursive base case
  if (arr.length <= 1) return arr;
  // We continously split the arr into halves until it's a single element
  // once it is it gets merged with another single element array
  // and recursively builds up the sorted array from there
  const middleIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middleIndex);
  const rightHalf = arr.slice(middleIndex);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

console.log(mergeSort([9, 4, 3, 7, 1, 12, 5]));
