/**
 * https://leetcode.com/problems/remove-element/
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The relative order of the elements may be changed.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead
 * have the result be placed in the first part of the array nums. More formally, if there are k
 * elements after removing the duplicates, then the first k elements of nums should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying the input array
 * in-place with O(1) extra memory.
 *
 * Custom judge:
 *
 * The judge will test your solution with the following code:
 *
 * int[] nums = [...]; // Input array
 * int[] expectedNums = [...]; // The expected answer with correct length
 *
 * int k = removeDuplicates(nums); // Calls your implementation
 *
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 *  assert nums[i] == expectedNums[i];
 * }
 *
 * If all assertions pass, then your solution will be accepted.
 *
 * Example 1:
 * Input: nums = [3,2,2,3], val = 3
 * Output: 2, nums = [2,2,_,_]
 * Explanation: Your function should return k = 2, with the first two elements of nums being 2.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Example 2:
 * Input: nums = [0,1,2,2,3,0,4,2], val = 2
 * Output: 5, nums = [0,1,4,0,3,_,_,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
 * Note that the five elements can be returned in any order.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Constraints:
 * 0 <= nums.length <= 3 * 10^4
 * 100 <= nums[i] <= 100
 * nums is sorted in non-decreasing order.
 *
 * @param {number[]} nums
 * @return {number}
 */

const removeElements = (nums, val) => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    if (nums[leftPointer] === val) {
      [nums[leftPointer], nums[rightPointer]] = [
        nums[rightPointer],
        nums[leftPointer],
      ];
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return leftPointer;
};

// console.log(removeDuplicates([1, 1, 2]));

const nums = [3, 2, 2, 3]; // Input array
const val = 3;
const expectedNums = [2, 2]; // The expected answer with correct length

const k = removeElements(nums, val); // Calls your implementation

for (let i = 0; i < k; i++) {
  console.log(nums[i] == expectedNums[i]);
}

console.log(nums);
