/**
 * Radix sort works not by doing comparison checks, but by placing numbers into 1 of 10 buckets
 * It takes the last digit from every number and depending on that digit it places the number
 * in the corresponding bucket whose index matches the last digit
 * These buckets are then emptied in order and the array goes through the above proccess again
 * but this time it is the second last digit, and so on till the largest number of digits present
 * in the array.
 *
 * For example if we had an input of [100, 200, 3000, 10] we would do four rounds of bucket placing
 * as the largest digit in the array has 4 digits (3000)
 *
 * Time complexity
 *
 * Best    Average     Worse
 * O(nk)   O(nk)       O(nk)
 *
 * n = length of array
 * k = number of digits
 *
 * Space complexity
 * O(n + k)
 */

const getDigit = (num, pos) =>
  Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (arr) => digitCount(Math.max(...arr));

const radixSort = (nums) => {
  const largestDigit = mostDigits(nums);

  for (let k = 0; k < largestDigit; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      const lastDigit = getDigit(nums[j], k);
      buckets[lastDigit].push(nums[j]);
    }
    nums = [].concat(...buckets);
  }

  return nums;
};

console.log(radixSort([74, 256, 1009, 12, 782]));
