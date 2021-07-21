/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the
 * value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 */

const reverseInteger = num => {
  const reversed = +String(Math.abs(num))
    .toString()
    .split("")
    .reverse()
    .join("")
  if (reversed > 0x7fffffff) {
    return 0
  }
  return num >= 0 ? reversed : -reversed
}

console.log(reverseInteger(875566))
