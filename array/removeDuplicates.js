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
    }  // object keys are string if in real world scenario we are dealing with number then it will be buggy
    
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

//     // Step 1: Track the occurrence of each number in the object
//     for (let i = 0; i < nums.length; i++) {
//         if (!obj1[nums[i]]) {
//           obj1[nums[i]] = true; // Use a boolean to track  unique numbers
//             duplicateLess.push(nums[i]); // Add unique numbers to the result array
//         }
//     }

//     // Step 2: Fill the rest of the array with underscores (_)
//     const length1 = duplicateLess.length;
//     const length2 = nums.length;
//     while (duplicateLess.length < nums.length) {
//         duplicateLess.push("_"); 
//     }

//     console.log(duplicateLess);
    
//     return duplicateLess;
// }

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
