/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  // Create a seen lookup
  // Populate seen lookup with first string
  const seen = strs[0].split("").reduce((prev, curr, i) => {
    // We want to use the index as a key to prevent duplicates
    prev[i] = curr
    return prev
  }, {})

  let min = Infinity

  // Loop through  strings
  for (let i = 0; i < strs.length; i++) {
    let rightPointer = 0
    // // Use a sliding window / pointer to loop through the string
    // // If the current character is in the seen lookup increase the window
    while (seen[rightPointer] === strs[i].charAt(rightPointer)) {
      rightPointer++
    }
    // // Take the minimum size of the window
    min = Math.min(min, rightPointer)
  }

  return strs[0].substring(0, min)

  // Other possible solution
  // for (let i = 0; i < strs[0].length; i++) {
  //   for (let j = 1; j < strs.length; j++) {
  //     if (strs[0].substring(0, i + 1) !== strs[j].substring(0, i + 1)) {
  //       return strs[0].substring(0, i)
  //     }
  //   }
  // }
  // return strs[0]
}

const now = Date.now()
console.log(longestCommonPrefix(["floower", "floow", "floight", "fo"]))
console.log(Date.now() - now)
