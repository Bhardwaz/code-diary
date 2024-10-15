var groupAnagrams = function(strs) {
   if(strs.length < 1) return strs
   
   const map = new Map()

   for(let i=0; i<strs.length; i++){
    let sortedString = strs[i].split('').sort().join('');
    
    if (map.has(sortedString)) {
        map.get(sortedString).push(strs[i]);
    } else {
        map.set(sortedString, [strs[i]]);
    }
   }
   const result = Array.from(map.values())
   return result
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
