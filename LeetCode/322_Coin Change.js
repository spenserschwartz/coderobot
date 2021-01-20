// https://leetcode.com/problems/coin-change/

// ! https://leetcode.com/problems/coin-change/discuss/423368/Extremely-Detailed-Explanation-JavaScript-DP-Solution

const coinChange = (coins, amount) => {

  // Create a new array of amount + 1 (starting at 0)
  const dp = new Array(amount + 1).fill(-1);
  // There are 0 ways to get to amount 0
  dp[0] = 0;

  // Base Case : If the coin can fit in the amount, increment its value in the dp array to 1
  coins.forEach(coin => (coin <= amount) ? dp[coin] = 1 : false);

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i && dp[i - coins[j]] !== -1) {
        dp[i] = dp[i] === -1 ? 1 + dp[i - coins[j]]
                             : Math.min(1 + dp[i - coins[j]], dp[i]);
      }
    }
  }

  return dp[amount];
}

console.log(coinChange([1,2,5], 11));