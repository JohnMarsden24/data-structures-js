function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  // add whatever parameters you deem necessary - good luck!
  // Create pointers
  //   let leftPointer = 0;
  //   let rightPointer = arr.length - 1;
  //   while (leftPointer < rightPointer) {
  //     let middle = Math.floor((leftPointer + rightPointer) / 2);
  //     if (arr[middle] === val) {
  //       return middle;
  //     } else if (arr[middle] < val) {
  //       leftPointer = middle + 1;
  //     } else if (arr[middle] > val) {
  //       rightPointer = middle - 1;
  //     }
  //   }
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) {
    return middle;
  } else if (arr[middle] < val) {
    left = middle + 1;
  } else if (arr[middle] > val) {
    right = middle - 1;
  }
  return binarySearch(arr, val, left, right);
}

console.log(binarySearch([1, 4, 6, 8, 10, 12, 13, 16, 20], 4));
