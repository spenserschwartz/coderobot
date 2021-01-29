// https://edabit.com/challenge/Miq47WDSYXnPDGdDP

const primeGaps = (gap, a, b) => {
  let firstPrime;

  for (let num = a; num <= b; num++) {
    if (isPrime(num)) {
      if (isNaN(firstPrime)) firstPrime = num;
      else {
        if (num - firstPrime === gap) return [firstPrime, num];
        else firstPrime = num;
      }
    } 
  }
  return null;
}

const isPrime = n => {
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i <= Math.ceil(Math.sqrt(n)); i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(5));
console.log(primeGaps(4,130,200))