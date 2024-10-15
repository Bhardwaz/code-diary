var reverseStr = function(s, k) {
    var str = s.split("")
    
    let left = 0
    let right = k - 1
        
    function reverse(left, right){
        while(left < right){
            let temp = str[right]
            str[right] = str[left]
            str[left] = temp
            left++
            right--
           }
    }
    for(let i=0; i < str.length; i += 2 * k){
     left = i
     right = i + k - 1
     reverse(left, right) 
    }

    return str.join("")
};
console.log(reverseStr("abcdefg", 2));
