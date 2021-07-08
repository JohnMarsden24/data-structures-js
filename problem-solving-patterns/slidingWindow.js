/*
// Uses a sliding window to calculate a subarray, normally with a start and end variable
// Dynamically sized window means the window size changes depending on the conditions
// 0(n) time complexity
*/

/*
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the 
// maximum sum of a subarray with the length of the number passed to the function. Note that a subarray 
// must consist of consecutive elements from the original array
*/

const maxSubarraySum = (arr, num) => {
  // if (!arr.length) return 0

  // let max = 0

  // // Get initial max value from the first sub array
  // for (let i = 0; i < num; i++) {
  //   max += arr[i]
  // }

  // // Set the temp variable which we use to compare against max to equal max
  // let temp = max

  // // Start the for loop at num as we've already calculated the first sub array
  // for (let i = num; i < arr.length; i++) {
  //   // Instead of recalculating the value we can subtract the first number outside of the subarray range
  //   // and then add the new number, therefore sliding the window to the right
  //   // Important to note I is acting as a right pointer
  //   temp = temp - arr[i - num] + arr[i]
  //   max = Math.max(max, temp)
  // }

  // return max

  // Shorter solution

  // Set initial max value
  let max = -Infinity
  // Set initial temp value to store running sum
  let total = 0
  // Loop through array
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
    // Once window size is equal to the number we can start checking the max value
    if (i >= num - 1) {
      max = Math.max(max, total)
      // Remove window end from the total by using the num size
      total -= arr[i - (num - 1)]
    }
  }

  return max
}

const maxSubarraySumArr = [2, 6, 9, 3, 6, 7, 9, 3, 5, 4]
const maxSubarraySumLength = 3
const maxSubarraySumResult = maxSubarraySum(
  maxSubarraySumArr,
  maxSubarraySumLength
)

// console.log(maxSubarraySumResult)

/*
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers 
// and a positive integer. This function should return the minimal length of a contiguous subarray of 
// which the sum is greater than or equal to the integer passed to the function. If there isn't one, 
// return 0 instead.
*/

const minSubArrayLen = (arr, total) => {
  // Solution 1

  // let minSize = Infinity
  // let tempSum = 0
  // let windowStart = 0

  // for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
  //   tempSum += arr[windowEnd]

  //   while (tempSum >= total) {
  //     minSize = Math.min(minSize, windowEnd - windowStart + 1)
  //     tempSum -= arr[windowStart]
  //     windowStart++
  //   }
  // }

  // return minSize

  // Solution 2

  // Set initial window start
  let start = 0
  // Set initial window end
  let end = 0
  // Set initial min
  let min = Infinity
  // Set initial current total to the first number of the array as we only add the next number if the current total is less than the total
  let currTotal = arr[start]

  while (start <= arr.length) {
    // If the current total is greater than the total we check the windows size and proceed to either increment or decrement
    // the window size depending on if it is greater or less than the total, as we could have just added a large number and
    // able to deduct more than one number from the window
    if (currTotal >= total) {
      min = Math.min(start - end + 1, min)
      // Short circuit if min size is 1 as we can't do any better than that
      if (min === 1) return 1
      // We deduct the windows end
      currTotal -= arr[end]
      // And increment the windows end
      end++
    } else {
      // The current total is less than the total so we increase the window size and add the new number to the current total
      start++
      currTotal += arr[start]
    }
  }

  return min
}

const minSubArrayLenArr = [4, 3, 3, 8, 1, 2, 3, 9]
const minSubArrayLenTotal = 12
const minSubArrayLenResult = minSubArrayLen(
  minSubArrayLenArr,
  minSubArrayLenTotal
)

// console.log(minSubArrayLenResult)

/*
// Write a function called findLongestSubstring which accepts a string and returns the length 
// of the longest substring with all distinct characters.
*/

const findLongestSubstring = str => {
  // Create initial lookup
  const lookup = {}
  // Set initial max sub string size
  let max = 0
  // Set initial window end
  let end = 0

  // Loop through the str
  for (let start = 0; start < str.length; start++) {
    // Check to see if the char is in the lookup
    const char = str[start]
    if (lookup[char]) {
      // If it is we reset the end to the index of the char when we last saw it or the current window end, whichever is larger
      // We have to check it with the current window end or else we could extend the window size to an incorrect larger size which
      // could contain duplicate chars
      end = Math.max(end, lookup[char])
    }
    // We add the current char to the lookup at is current index and plus one as arrays are 0 based while string length starts at 1
    lookup[char] = start + 1
    // We check current window size
    max = Math.max(max, start - end + 1)
  }

  return max
}

const findLongestSubstringStr = "longestsubstring"
const findLongestSubstringResult = findLongestSubstring(findLongestSubstringStr)

console.log(findLongestSubstringResult)
