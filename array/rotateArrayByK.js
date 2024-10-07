// iterative approach
var rotate = function(nums, k){
      if(k===0) return nums
      
      k = k % nums.length;

      for(let i=0; i<k-1; i++){
         const element = nums.shift()
         nums.push(element)
      }
      return nums
}

var nums = [1,2,3,4,5,6,7]

const result = rotate(nums, 3)

console.log(result)


// double pointer approach

function reverse(arr, left, right){
     while(left < right){
     var temporary = arr[left]
     arr[left] = arr[right]
     arr[right] = temporary
     left++
     right--
    }
}
var rotate = function (arr, k) {
    let length = arr.length;
    k = k % length;
    reverse(arr, 0, length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, length - 1);
  };