// var maxArea = function(height) {
//    // max area formula = height * width
//    // for container height we need to take care of two points
   
//     let startPoint = height[0]
//     let endPoint = height[0]

//     for(let i = 1; i < height.length; i++){
//         if(height[i] >= startPoint){
//         startPoint = height[i]
//         }else if(height[i] > endPoint){
//             endPoint = height[i]
//         }
//     }
//     let point1 = height.indexOf(startPoint)
//     let point2 = height.indexOf(endPoint)

//     let h = point2 - point1
//     let w = endPoint
//     let area =  h * w
//     console.log(area);
    
// }; 

var maxArea =  function(height) {
   if(height.length <= 1) return null

   let right = height.length - 1
   let left = 0
   maxWidth = 0

   while( right > left ){
     
     maxWidth = Math.max(maxWidth, (right - left) * Math.min(height[right], height[left]))

     if(height[right] > height[left]){
       left++
     }else{
       right--
     }
   }
   return maxWidth
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
