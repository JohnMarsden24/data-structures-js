/**
 * https://leetcode.com/problems/implement-strstr/
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Clarification:
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to
 * C's strstr() and Java's indexOf().
 *
 * Example 1:
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 * Example 3:
 * Input: haystack = "", needle = "
 * Output: 0
 *
 * Constraints:
 * 0 <= haystack.length, needle.length <= 5 * 10 ^ 4
 * haystack and needle consist of only lower-case English characters.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const kmpTemplate = (str) => {
  // Create two pointers at the first two chars
  let leftPointer = 0;
  let rightPointer = 1;
  // Create an array equal to str length and originally fill with 0s
  const template = new Array(str.length).fill(0);
  // Use a while loop to iterate through the str
  while (rightPointer < str.length) {
    // If the chars are the same at each pointer, increment both and insert leftPointer + 1 into
    // the template array at rightPointers indrex
    if (str[leftPointer] === str[rightPointer]) {
      template[rightPointer] = leftPointer + 1;
      leftPointer++;
      rightPointer++;
      // Else if leftPointer is above 0, reassign leftPointer to it's previous index
    } else if (leftPointer > 0) {
      leftPointer = template[leftPointer - 1];
    } else {
      // Else we simply increment rightPointer
      rightPointer++;
    }
  }
  return template;
};

const strStr = (haystack, needle) => {
  // Short circuit if either haystack or needle are an empty string
  if (!needle) return "";
  // Create template lookup for KMP search
  const template = kmpTemplate(needle);
  // Create haystack and needle pointers
  let haystackPointer = 0;
  let needlePointer = 0;
  // Use a while loop to iterate through the haystack
  while (haystackPointer < haystack.length) {
    // If the current char at haystack pointer matches the the current char at needle pointer
    if (haystack[haystackPointer] === needle[needlePointer]) {
      // We check to see if needle pointer is equal to needle length, if it is we have found a full match and return
      // We increment both pointers
      haystackPointer++;
      needlePointer++;
      if (needlePointer === needle.length) {
        return haystackPointer - needle.length;
      }
      // Else if needle pointer is above 0, we can check to see if there's a previous position
      // we can start from again
    } else if (needlePointer > 0) {
      needlePointer = template[needlePointer - 1];
    } else {
      // Else we simple increment haystackPointer
      haystackPointer++;
    }
  }
  return -1;
};

console.log(strStr("", "a"));
