var missingNumber = function(nums){
     let allXOR = 0

     for(let i=0; i <= nums.length; i++){
        allXOR = allXOR ^ i
        console.log(allXOR);
     }
     
     for(let num of nums){
        allXOR = allXOR ^ num
     }

     return allXOR
     
}

missingNumber([3,0,1])