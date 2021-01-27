// https://leetcode.com/problems/super-ugly-number/

//! Time Limit 

const nthSuperUglyNumber = (n, primes) => {
  let number = 0;

  while (n > 0) {
    number++;

    if (superUglyHelper(number, primes)) n--;
  }
  return number;
}

const superUglyHelper = (n, primes) => {
  for (let prime of primes) {
    while (n % prime === 0) n /= prime;
  }
  return n === 1;
}


const n = 12, primes = [2,7,13,19]
console.log(nthSuperUglyNumber(n, primes))