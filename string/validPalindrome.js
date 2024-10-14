// var isPalindrome = function(s) {
//    let str = s
//   .split("") // Split the string into an array of characters
//   .filter(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) // Keep only alphabets
//   .join("").toLowerCase() ; // Join the filtered characters back into a string
  
//   let left = 0
//   let right = str.length - 1
  
//   while(left < right){
//     if(str.charAt(left) === str.charAt(right)){
//         left++
//         right--
//     }else{
//         return false
//     }
//   }
//    return true
// };


var isPalindrome = function(s) {
    // Use regular expression to filter out non-alphanumeric characters and convert to lowercase
    let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Initialize two pointers, one at the start and the other at the end of the string
    let left = 0;
    let right = str.length - 1;
 
    
    // Check characters from both ends moving towards the center
    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // If characters don't match, it's not a palindrome
        }
        left++;
        right--;
    }
    
    // If all characters match, it's a palindrome
    return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));
