var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // If the input array is empty, return an empty string
    
    let prefix = strs[0]; // Start with the first string as the initial prefix
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // If the current string does not start with the prefix, shorten the prefix
            prefix = prefix.substring(0, prefix.length - 1);
        
            if (prefix === "") return ""; // If the prefix becomes empty, return an empty string
        }
    }
    return prefix; // Return the longest common prefix
};

//console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"

function longest(strs){
   let prefix = strs[0]

   for(let i=1; i<strs.length; i++){
    while(strs[i].indexOf(prefix) !== 0){
      prefix = prefix.slice(0, prefix.length-1)
      if(prefix === "") return "Not found"    
    }
   }
   return prefix
}
console.log(longest(["flower", "flow", "flight"]));