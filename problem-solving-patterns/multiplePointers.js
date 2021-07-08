/*
// Uses multiple pointers to look for pairs or matching values in a linear data structure
// 0(n) time complexity
*/

/*
// Write a function that finds the first pair in a sorted array that adds to 0
// 0(1) space complexity
*/

const sumZero = arr => {
  let leftPointer = 0
  let rightPointer = arr.length - 1

  while (leftPointer < rightPointer) {
    const sum = arr[leftPointer] + arr[rightPointer]

    if (sum === 0) {
      return [arr[leftPointer], arr[rightPointer]]
    } else if (sum > 0) {
      rightPointer--
    } else {
      leftPointer++
    }
  }
}

const sumZeroArr = [-4, -3, -2, -1, 0, 1, 2, 5]

// const sumZeroResult = sumZero(sumZeroArr)

// console.log(sumZeroResult)

/*
// Write a function that finds all unique values in an array
// 0(1) space complexity
*/

const countUniqueValues = arr => {
  if (!arr.length) return 0
  let leftPointer = 0
  let rightPointer = 1
  let counter = 1

  // While the right pointer has not reached the end of the array we check to see if
  // the values are different and if they are we increase the counter and reset the left pointer
  while (rightPointer <= arr.length) {
    if (arr[leftPointer] < arr[rightPointer]) {
      counter++
      leftPointer = rightPointer
      rightPointer++
    } else {
      rightPointer++
    }
  }

  return counter
}

const countUniqueValuesArr = [1, 1, 1, 1, 2, 3, 3, 3, 4, 7, 8, 8, 9]

const countUniqueValuesResult = countUniqueValues(countUniqueValuesArr)

// console.log(countUniqueValuesResult)

const countUniqueValues2 = arr => {
  if (!arr.length) return 0
  let leftPointer = 0

  // Same solution as above but uses a loop instead of a while loop
  // It also mutates the array by placing the found unique numbers at the start of the array
  for (let rightPointer = 1; rightPointer < arr.length; rightPointer++) {
    if (arr[leftPointer] !== arr[rightPointer]) {
      leftPointer++
      arr[leftPointer] = arr[rightPointer]
    }
  }

  return leftPointer + 1
}

const countUniqueValues2Arr = [1, 1, 1, 1, 2, 3, 3, 3, 4, 7, 8, 8, 9]

const countUniqueValues2Result = countUniqueValues2(countUniqueValues2Arr)

// console.log(countUniqueValues2Result)

/*
// Write a function called averagePair which is passed a sorted array of integers and a target average
// determine if there is a pair of values in the array where the average of the pair equals the target average
// There may be more than one pair that matches the average target
*/

const averagePair = (arr, target) => {
  // Short circuit if there is less than two items
  if (!arr.length) return false

  /*
  // This approach uses the right pointer to scout ahead
  */
  // Set initial pointers
  // let leftPointer = 0
  // let rightPointer = 1

  // // Iterate through the arr
  // while (rightPointer <= arr.length) {
  //   // Check if leftPointer and rightPointer average equal the target
  //   const average = (arr[leftPointer] + arr[rightPointer]) / 2
  //   if (average === target) {
  //     return true
  //   }

  //   // If not increment rightPointer
  //   rightPointer++

  //   // If we've reached the end of the arr we need to move the left pointer and reset the rightPointer
  //   if (rightPointer === arr.length) {
  //     leftPointer++
  //     rightPointer = leftPointer + 1
  //   }
  // }

  // return false

  /*
  // This approach uses the right pointer to move from the end of the array
  */
  // Set initial pointers
  let leftPointer = 0
  let rightPointer = arr.length - 1

  // Iterate through the arr
  while (leftPointer < rightPointer) {
    // Check if leftPointer and rightPointer average equal the target
    const average = (arr[leftPointer] + arr[rightPointer]) / 2
    if (average === target) {
      return true
    } else if (average > target) {
      rightPointer--
    } else {
      leftPointer++
    }
  }
  return false
}

const averagePairArr = [1, 3, 3, 5, 6, 7, 10, 12, 19]
const averagePairTarget = 8

const averagePairResult = averagePair(averagePairArr, averagePairTarget)

// console.log(averagePairResult)

/*
// Write a function called isSubsequence which takes in two strings and checks whether the 
// characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, 
*/

const isSubsequence = (subString, string) => {
  // Set initial pointers
  // leftPointer will keep track of subString
  // rightPointer will scout ahead in string
  let leftPointer = 0
  let rightPointer = 0

  // While rightPointer is less than the strings length we loop
  while (rightPointer < string.length) {
    if (subString[leftPointer] === string[rightPointer]) {
      leftPointer++
      rightPointer++
    } else {
      rightPointer++
    }
  }

  return leftPointer === subString.length

  // Simpler solution
  // let count = 0;
  // for (let c of str2) {
  //   if (str1[count] === c) {
  //     count++;
  //   }
  // }
  // return (str1.length === count);

  // Provided solution
  // var i = 0;
  // var j = 0;
  // if (!str1) return true;
  // while (j < str2.length) {
  //   if (str2[j] === str1[i]) i++;
  //   if (i === str1.length) return true;
  //   j++;
  // }
  // return false;
}

const isSubsequenceStr1 = "sing"
const isSubsequenceStr2 = "sting"
const isSubsequenceResult = isSubsequence(isSubsequenceStr1, isSubsequenceStr2)

console.log(isSubsequenceResult)
