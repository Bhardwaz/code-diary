var productExceptSelf = function(nums) {
    const left = new Array(nums.length)
    const right = new Array(nums.length)
    
    left[0] = 1
    for(let i = 1; i < nums.length; i++){
        left[i] = left[i - 1 ] * nums[i - 1]
    }

    right[nums.length - 1] = 1
    for(let i = nums.length - 2; i > -1 ; i--){
        right[i] = right[i + 1 ] * nums[i + 1]
    }

    const answer = new Array(nums.length)
    
    for(let i = 0; i < nums.length; i++){
        answer[i] = left[i] * right[i]
    }

    return answer
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));
