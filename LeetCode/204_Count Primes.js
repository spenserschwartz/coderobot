// https://leetcode.com/problems/count-primes/

const countPrimes = n => {
  if (n < 2) return 0;
  let count = 1;

  for (let i = 3; i <= n; i += 2) {
    let isPrime = true;
    for (let j = 3; j <= Math.sqrt(i); j += 2) {
      if (i % j === 0) isPrime = false;
    }
    if (isPrime === true) count += 1;
  }

  return count;
}

console.log(countPrimes(10));