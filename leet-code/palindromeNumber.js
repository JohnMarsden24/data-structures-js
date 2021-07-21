/**
 * Given an integer x, return true if x is palindrome integer
 * An integer is a palindrome when it reads the same backward as forward
 * For example, 121 is palindrome while 123 is not
 */

const isPalindrome = num => {
  const numArr = typeof num === "number" ? `${num}`.split("") : num
  if (numArr.length < 2) {
    return true
  }
  let leftPointer = 0
  let rightPointer = numArr.length - 1

  if (numArr[leftPointer] === numArr[rightPointer]) {
    leftPointer++
    return isPalindrome(numArr.slice(leftPointer, rightPointer))
  }

  return false

  // while (leftPointer < rightPointer) {
  //   if (numArr[leftPointer] === numArr[rightPointer]) {
  //     leftPointer++
  //     rightPointer--
  //   } else {
  //     return false
  //   }
  // }
  // return true
}

console.log(isPalindrome(12345354321))
