exports.sortTwoArrays = (arr1, arr2, sortingAlgo) => {
  let sorted = [];
  let longestArr = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < longestArr; i++) {
    if (arr1[i] && arr2[i]) {
      sorted = sortingAlgo([...sorted, arr1[i], arr2[i]]);
    } else if (arr1[i]) {
      sorted = sortingAlgo([...sorted, arr1[i]]);
    } else {
      sorted = sortingAlgo([...sorted, arr2[i]]);
    }
  }
  return sorted;
};
