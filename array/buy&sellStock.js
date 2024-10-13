function solution(prices){
    let buyingPrice = prices[0]
    let profit = 0

     for(let i=1; i<prices.length;i++){
       if(prices[i] < buyingPrice){
         buyingPrice = prices[i]
       }else {
        let currentProfit = prices[i] - buyingPrice
        profit = Math.max(currentProfit, profit)
       }
     }
     return profit
}

console.log(solution([7,1,5,3,6,4]));
console.log(solution([7,1,5,3,6,4]));
