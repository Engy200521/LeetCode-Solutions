/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let x , y;
    for (let i = 0; i < nums.length; i++) {
        x = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            y = nums[j];
            if (x + y === target) {
                return [i ,  j];
            }
        }
    }
};
