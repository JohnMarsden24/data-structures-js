/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Example 4:
 * Input: s = "([)]"
 * Output: false
 *
 * Example 5:
 * Input: s = "{[]}"
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 *
 * @param {string} s
 * @return {boolean}
 */

/**
 *
 *
 */
const isValid = (s) => {
  // Create stack for keeping track of closing elements of pairs
  // We use a stack as order is important
  const stack = [];

  // Create pair lookup as we want to add the closing element of the pair to the stack
  // Can also use this lookup to check if the current element in the iteration
  // is an opening or closing element of the pair
  const pairsLookup = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  // Iterate through the string
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (pairsLookup[element]) {
      // If current element is an opening of the pair we push it to the stack
      stack.push(pairsLookup[element]);
    } else {
      // Else the element must be a closing of the pair and we check if it's
      // equal to the last element of the stack
      if (stack[stack.length - 1] === element) {
        // If it is the string is so far valid and we pop it off
        stack.pop();
      } else {
        // Else the string is invalid and we can short circuit
        return false;
      }
    }
  }

  // In the case where s length is less than 2 we can check at the end if there's
  // any remaining elements in the stack, if there are s is invalid as all
  // pairs must be closed for s to be valid
  return stack.length > 0 ? false : true;
};

console.log(isValid("["));
