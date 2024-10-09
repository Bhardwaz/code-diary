var removeDuplicates = function (nums) {
    if (nums.length <= 1) return nums

    const obj1 = {}
    const duplicateLess = []

    for (let i = 0; i < nums.length; i++) {
        if (obj1[nums[i]]) {
            obj1[nums[i]]++
        } else {
            obj1[nums[i]] = 1
        }
    }
    
    for(let key in obj1){
     duplicateLess.push(key)
    }  
    
    const length1 = duplicateLess.length
    const length2 = nums.length

    while (duplicateLess.length < nums.length) {
        duplicateLess.push("_"); 
    }             

    console.log(duplicateLess);

}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])



// Chat GPT Solution

// var removeDuplicates = function (nums) {
//     if (nums.length <= 1) return nums;

//     const obj1 = {};
//     const duplicateLess = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (!obj1[nums[i]]) {
//           obj1[nums[i]] = true; 
//             duplicateLess.push(nums[i]);
//         }
//     }

//     const length1 = duplicateLess.length;
//     const length2 = nums.length;
//     while (duplicateLess.length < nums.length) {
//         duplicateLess.push("_"); 
//     }

//     console.log(duplicateLess);
    
//     return duplicateLess;
// }

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// Leetcode solution to the problems

var removeDuplicates = function (nums) {
    if (nums.length <= 1) return nums.length; 

    const obj1 = {};
    let index = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (!obj1[nums[i]]) {
            obj1[nums[i]] = true;  
            nums[index] = nums[i]; 
            index++; 
        }
    }
    
    console.log(nums)
    console.log(index)

    return index; 
}
