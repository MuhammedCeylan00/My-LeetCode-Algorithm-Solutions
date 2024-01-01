// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.


// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.


var increasingTriplet = function(nums) {
    let i = null;
    let j = null;

    for(const num of nums) {
        
        if(i == null || i >= num) {
            i = num;
            continue;
        }

        if(j == null || j >= num) {
            j = num;
            continue;
        }

        return true;
    }

    return false;
};
console.log(increasingTriplet([20,100,10,12,5,5]))