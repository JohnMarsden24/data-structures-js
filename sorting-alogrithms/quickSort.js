// /**
//  * Quick sort works by choosing a random value in the array and then iterating through the array
//  * and comparing each element against the chosen value. If it is less than the chosen value that element
//  * gets put to the left of the chosen value and if it's greater it remains on the right of the chosen value
//  * At the end of this iteration the chosen value is in its final position and then it is recursively called
//  * on either side of the array
//  * Time complexity
//  *
//  * Best         Average     Worse
//  * O(n log n)   O(n log n)  O(n ^ 2)
//  *
//  *
//  * Space complexity
//  * O(log n)
//  */

const pivot = (arr, start = 0, end = arr.length - 1) => {
  // We pick the first element in the array as our pivot and pivot index
  const firstItem = arr[start];
  let pivotIndex = start;
  // We iterate till i is greater than end as we only want to iterate through one half of the array
  // which is why our condition is end and not arr.length
  for (let i = start + 1; i <= end; i++) {
    if (firstItem > arr[i]) {
      // If the current element is less than our pivot we increment our pivot index
      // and move the current element to the left hand side, doing so we keep number
      // of how many elements are smaller than our current element
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  // At the end of the loop we swap our first element to whatever element is at the pivot index
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // As left anf right will eventually be 0 and 0 we can use that as our base condition
  if (left < right) {
    // Get initial pivot
    const pivotIndex = pivot(arr, left, right);
    // We don't slice the original array into smaller chunks, we only want to iterate through
    // the two havles either side of the pivot
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;

  // Other solution
  //   let pivot = arr[arr.length - 1];

  //   let left = [];

  //   let right = [];

  //   if (arr.length <= 1) return arr;

  //   for (let i = 0; i < arr.length - 1; i++) {
  //     if (arr[i] > pivot) right.push(arr[i]);
  //     else left.push(arr[i]);
  //   }

  //   return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([3, 5, 4, 2, 6]));
