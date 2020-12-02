// Find the number of ways to make change 
// https://www.algoexpert.io/questions/Number%20Of%20Ways%20To%20Make%20Change


const numberOfWaysToMakeChange = (n, denoms) => {
  const ways = new Array(n + 1).fill(0);
  ways[0] = 1;

  for (let denom of denoms) {
    for (let amount = 1; amount < n + 1; amount++) {
      if (denom <= amount) ways[amount] += ways[amount - denom];
    }
  }

  return ways;
}

let n = 10;
let denoms = [1, 5, 10, 15];
console.log(numberOfWaysToMakeChange(n, denoms));