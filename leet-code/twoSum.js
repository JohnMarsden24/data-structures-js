/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1] Because nums[0] + nums[1] == 9, we return [0, 1]
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 * Constraints:
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  /**
   * Using two pointers
   */
  // We copy and sort the input array into ascending order in a immutable way as we need to preserve the input arrays order
  const sorted = [...nums].sort((a, b) => a - b);

  // We set our initial pointers
  let leftPointer = 0;
  let rightPointer = sorted.length - 1;

  // We set our initial current total
  let currTotal = -Infinity;

  // We iterate while the current total is not equal to the target
  while (currTotal !== target) {
    // We assign the current total to the sum of the numbers at the left and right pointer index
    currTotal = sorted[leftPointer] + sorted[rightPointer];

    // If the current total is larger than the target we decrement the right pointer
    if (currTotal > target) {
      rightPointer--;
      // If the current total is smaller than the target we increment the left pointer
    } else if (currTotal < target) {
      leftPointer++;
    }
  }

  // To return the original indexes we pass the numbers at both pointers
  const originalIndex1 = nums.indexOf(sorted[leftPointer]);
  const originalIndex2 = nums.lastIndexOf(sorted[rightPointer]);

  return [originalIndex1, originalIndex2];

  /**
   * Using lookup
   */

  // Create initial lookup
  const lookup = nums.reduce((prev, curr, index) => {
    // If there are duplicates in the input array we want to have the last instances index to prevent a duplicate from returning its own index
    // e.g - input array = [3, 2, 3], target = 6, we want to return [0, 2] not [0, 0] which would be the case if we didn't reassign the index
    prev[curr] = index;
    return prev;
  }, {});

  for (let i = 0; i < nums.length; i++) {
    // Calculate the difference between the target number and current number
    const difference = target - nums[i];
    // If the difference exists as a key in our lookup we know the current number and difference sum up to the total
    // We also need to make sure the current lookup value isn't equal to the current index or else we would add the same number to itself
    if (lookup[difference] && lookup[difference] !== i) {
      return [i, lookup[difference]];
    }
  }
};

const input = [1, 3, 4, 2];
const target = 6;
console.log(twoSum(input, target));
