var merge = function(intervals) {
   if(intervals.length <= 1) return intervals

   // sort by ascending order

   intervals.sort((a, b) => a[0] - b[0])

   const result = []

   let currentInterval = intervals[0] 
   // initializing initial interval

   // step 2 - iterate through the sorted intervals

   for(let i=1; i < intervals.length; i++){
    const nextInterval = intervals[i] // assigning next interval as well so we can compare these easily 

    if( currentInterval[1] >= nextInterval[0] ){
        // Merge the intervals by updating the end of the current interval

        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
    }else{
        result.push(currentInterval);
        currentInterval = nextInterval;
    }
   }

   // Add the last interval
   result.push(currentInterval);

   return result

//    for(let i=0; i < intervals.length; i++){
//     if( intervals[i][1] >= intervals[i+1][0]){
//       result.push([intervals[i][0], intervals[i+1][1]])  
//     } to avoid this kind of mess. its important we break solution in pieces.
//    }
       
};

console.log(merge([[8,10], [1,3], [15,18], [2,6]]));
