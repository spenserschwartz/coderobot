// https://edabit.com/challenge/n3w4fqdaMuCB9bjgs



const primalStrength = n => {
  const memo = [2];

  const isPrime = n => {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;

    for (let i = 3; i <= Math.sqrt(n); i+=2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  let under = false;
  let over = false;
  let range = 0;

  while (under === false && over === false) {
    range++;
    if (isPrime(n - range)) under = true;
    if (isPrime(n + range)) over = true;
  }
  
  if (over && under) return "Balanced";
  else if (over) return "Strong";
  else return "Weak";
}

console.log(primalStrength(211))


