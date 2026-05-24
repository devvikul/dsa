// Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution. Example 1: Input: nums = [-1,2,1,-4], target = 1 Output: 2 Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2). Example 2: Input: nums = [0,0,0], target = 1 Output: 0 Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0). Constraints: 3 <= nums.length <= 500 -1000 <= nums[i] <= 1000 -104 <= target <= 104

const threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);

    let closestSum = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i++) {

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            let currentSum = nums[i] + nums[left] + nums[right];

            // Update closest sum
            if (
                Math.abs(target - currentSum) <
                Math.abs(target - closestSum)
            ) {
                closestSum = currentSum;
            }

            // Move pointers
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // Exact match found
                return currentSum;
            }
        }
    }

    return closestSum;
};