var twoSum = function(nums, target) {
    if(nums.length <= 1) return null
     
     for(let i=0; i <= nums.length ; i++){
       for(let j= i + 1 ; j <= nums.length; j++){
         if(nums[i] + nums[j] === target){
             return [i, j]
         }
       }
     }
     return []
 };