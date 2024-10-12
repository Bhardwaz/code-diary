var maxArea = function(height) {
   // max area formula = height * width
   // for container height we need to take care of two points
   
    let startPoint = height[0]
    let endPoint = height[0]

    for(let i = 0; i < height.length; i++){
        if(height[i] >= startPoint){
        startPoint = height[i]
        }else if(height[i] > endPoint){
            endPoint = height[i]
        }
    }

    return endPoint * endPoint
   
}; 

maxArea([1,8,6,2,5,4,8,3,7])
maxArea([1,1])