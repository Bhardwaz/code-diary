// method solution
var reverseString = function(s) {
   if(s === "" || s === " ") return s
   
   return s.split('').reverse().join('')
};

//console.log(reverseString("Hello"));


// brute force

var reverseString2 = function(s) {
    if(s === "" || s === " ") return s
    
    let reverseStr = ""

    for(let i = s.length - 1; i >= 0 ; i--){
     reverseStr += s[i]
    } 

    return reverseStr
};

// console.log(reverseString2("hello"))

var reverseString3 = function(s) {
    if(s.length <= 1) return s
    
    return s.reverse()
 };

//console.log(reverseString3(["h","e","l","l","o"]));

// with double pointer

var reverseString4 = function(s) {
    if(s.length <= 1) return s
    
    let right = s.length - 1
    let left = 0

    while(left < right){
       let temp = s[right]
       s[right] = s[left]
       s[left] =  temp
       left++
       right--
    }

    return s

 };

console.log(reverseString4(["h","e","l","l","o"]));
