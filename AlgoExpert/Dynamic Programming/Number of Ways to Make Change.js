// Find the number of ways to make change 

// function numberOfWaysToMakeChange(n, denoms) {
//   const ways = new Array(n + 1).fill(0);
//   ways[0] = 1;  // base case, 1 way to get to 0
//   for (let denom of denoms) {
//     for (let amount = 1; amount < n + 1; amount += 1) {
//       console.log('Amt:', amount)
//       if (denom <= amount) {
//         ways[amount] += ways[amount - denom];
//       }
//     }
//   }



//   console.log(ways);
//   return ways[n];
// }

const numberOfWaysToMakeChange = (n, denoms) => {
  const count = 0;

  const helper = (number, array) = {
    for (let i = array.length - 1; i >= 0; i--) {
      if (n - array[i] >= 0) {
        
      }
    }
  }

  helper(n, denoms);
  return count;
}

let n = 10;
let denoms = [1, 5, 10, 15];
console.log(numberOfWaysToMakeChange(n, denoms));