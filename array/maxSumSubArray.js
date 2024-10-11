// Brute force 

function maxSubarraySum(arr) {
    let res = arr[0];
  
    // Outer loop for starting point of subarray
    for (let i = 0; i < arr.length; i++) {
        let currSum = 0;
      
        // Inner loop for ending point of subarray
        for (let j = i; j < arr.length; j++) {
            currSum = currSum + arr[j];
          
            // Update res if currSum is greater than res
            res = Math.max(res, currSum);
        }
    }
    return res;
}

// using kadane's algorithm

function maxSubarraySum2(arr) {
    let res = arr[0];
    let maxEnding = arr[0];

    for (let i = 1; i < arr.length; i++) {
        
        // Find the maximum sum ending at index i by either extending 
        // the maximum sum subarray ending at index i - 1 or by
        // starting a new subarray from index i
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        
        // Update res if maximum subarray sum ending at index i > res
        res = Math.max(res, maxEnding);
    }
    return res;
}

function maxSubarraySum3(nums){
     if(nums.length < 2) return nums

     let sum = 0
     let maxSum = nums[0]

     for(let i=1; i<nums.length-1;i++){
     sum = sum + nums[i]

     if(sum > maxSum){
        maxSum = sum
     } else if(sum < 0){
        sum = 0
     }
     }
}