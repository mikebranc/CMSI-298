/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0
    for (let i=0; i<k; i++){ //get starting sum for first array of k length
        sum += nums[i]
    }
    let max = sum //set as max sum
    for (let j=k; j < nums.length; j++){  
        sum += nums[j] - nums[j-k] //remove the first value of the last subarray and add the last value of the next subarray
        if(max<sum) max = sum 
    }
    return max/k
};