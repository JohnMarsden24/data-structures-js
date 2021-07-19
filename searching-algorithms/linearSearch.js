function linearSearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!
  let index = 0;
  for (index; index < arr.length; index++) {
    if (arr[index] === value) return index;
  }

  return -1;
}

console.log(linearSearch([100, 200, 300], 300));
