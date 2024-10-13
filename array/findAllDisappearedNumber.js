var findDisappearedNumbers = function(nums) {
     if(nums.length < 2) return nums
     
     const result = []

     for(let i=0; i < nums.length; i++){
      let idx = Math.abs(nums[i]) - 1
      if(nums[idx] < 0) continue

      nums[idx] *= -1
     }

     for(let i=0; i < nums.length; i++){
      if(nums[i] > 0){
        result.push(i + 1)
      }
     }

     return result
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
