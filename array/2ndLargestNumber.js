// iterative approach

function findSecondLargest(arr) {
    if (!arr.length) return -1;
    let largest = arr[0];
    let secondLargest = -Infinity;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
  const result = findSecondLargest([
    10, -5, 7, -12, 30, -8, 15, -3, 0, -20, 25, -18, 6, -9, 14, -22, 17, -4, 11,
    -27,
  ]);

console.log(result);
