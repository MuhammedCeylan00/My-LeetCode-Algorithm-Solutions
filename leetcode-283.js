// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// [4,2,4,0,0,3,0,5,1,0]


var moveZeroes = function(nums) {
    var indexArray = []
    for (let index = 0; index <nums.length; index++) {
        const element = nums[index];
        if(element==0){
            indexArray.push(index);
        }
    }
   // console.log("index array: ",indexArray);
    let indexCount = 0;
    for(let j=0; j<indexArray.length; j++){
       nums.splice(indexArray[j]-indexCount,1)
       nums.push(0);

       indexCount = indexCount+1;
    }
    console.log(nums);
    return nums;
};

moveZeroes([0])