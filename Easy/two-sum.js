// LeetCode: Two Sum (Easy)
// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

// Example run
console.log(twoSum([2,7,11,15], 9)); // [0,1]s