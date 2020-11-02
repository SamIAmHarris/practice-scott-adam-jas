// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) { //O(n^2)
    let secondValue = 0;
    let secondIndex = 0;

    for(let i = 0; i < nums.length; i++){
        secondValue = target - nums[i];
        secondIndex = (nums.slice(i + 1)).indexOf(secondValue);
        if(secondIndex !== -1){
            return [i, secondIndex + i + 1];
        }
    }
};

let check = [3,2,4]
console.log(twoSum(check, 6));